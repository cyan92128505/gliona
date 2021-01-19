import axios, { AxiosInstance } from 'axios';

import * as rc from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';
import localStorageDataProvider from 'ra-data-local-storage';
import { firebaseAuthProvider } from './auth_provider';
import { StateCodeType } from './error_provider';

import env from '../config/env';
import SettingModel from '../models/repositories/setting_model';
import { CustomeAppState } from '../types';
import { settingFlag, sidebarSettingFlag, localeFlag } from './repositories/setting';

class DataProviderFactory {
  appState = {
    admin: {
      ui: {
        sidebarOpen: true,
      },
    },
    customReducer: {
      isSuperUser: false,
      locale: 'zh',
    },
  };

  instance: AxiosInstance;

  localStorage: rc.DataProvider;

  simpleRestProvider: rc.DataProvider;

  showErrorMessage: (message: string) => void = () => {};

  constructor() {
    const axiosApiInstance = axios.create({
      baseURL: env.apiEndPoint,
    });

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const tempConfig = config;
        const token = await firebaseAuthProvider.getJWTToken();
        tempConfig.headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
        return tempConfig;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosApiInstance.interceptors.response.use(
      (response) => {
        if (response.data.Result != null && response.data.Result !== 0) {
          this.showErrorMessage(`${response.data.Result}`);
        }

        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        const status = error.response != null ? `${error.response.status}` : `${StateCodeType.ServerError}`;

        if (error.response != null && +status === 401 && !originalRequest.isRetryHttpRequest) {
          originalRequest.isRetryHttpRequest = true;
          const token = await firebaseAuthProvider.getJWTToken();
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          this.showErrorMessage(`${error.response.status}`);
          return axiosApiInstance(originalRequest);
        }

        this.showErrorMessage(status);
        return Promise.reject(error);
      }
    );

    this.instance = axiosApiInstance;

    this.simpleRestProvider = simpleRestProvider(`${process.env.REACT_APP_END_POINT}`, axiosApiInstance.post);

    this.localStorage = localStorageDataProvider({
      defaultData: { setting: [{ id: sidebarSettingFlag, value: true }] },
      localStorageKey: `${env.appName}`,
      loggingEnabled: false,
      localStorageUpdateDelay: 100,
    });
  }

  setupErrorMessageEmitter(method: (message: string) => void) {
    this.showErrorMessage = method;
  }

  getList<T extends rc.Record>(resource: string, params: rc.GetListParams): Promise<rc.GetListResult<T>> {
    return this.localStorage.getList(resource, params);
  }

  getOne<T extends rc.Record>(resource: string, params: rc.GetOneParams): Promise<rc.GetOneResult<T>> {
    return this.localStorage.getOne(resource, params);
  }

  getMany<T extends rc.Record>(resource: string, params: rc.GetManyParams): Promise<rc.GetManyResult<T>> {
    return this.localStorage.getMany(resource, params);
  }

  getManyReference<T extends rc.Record>(
    resource: string,
    params: rc.GetManyReferenceParams
  ): Promise<rc.GetManyReferenceResult<T>> {
    return this.localStorage.getManyReference(resource, params);
  }

  update<T extends rc.Record>(resource: string, params: rc.UpdateParams): Promise<rc.UpdateResult<T>> {
    return this.localStorage.update(resource, params);
  }

  updateMany(resource: string, params: rc.UpdateManyParams): Promise<rc.UpdateManyResult> {
    return this.localStorage.updateMany(resource, params);
  }

  create<T extends rc.Record>(resource: string, params: rc.CreateParams): Promise<rc.CreateResult<T>> {
    return this.localStorage.create(resource, params);
  }

  delete<T extends rc.Record>(resource: string, params: rc.DeleteParams): Promise<rc.DeleteResult<T>> {
    return this.localStorage.delete(resource, params);
  }

  deleteMany(resource: string, params: rc.DeleteManyParams): Promise<rc.DeleteManyResult> {
    return this.localStorage.deleteMany(resource, params);
  }

  async getSidebarSetting(): Promise<boolean | null> {
    try {
      const setting = await this.getOne<SettingModel>(settingFlag, {
        id: sidebarSettingFlag,
      });
      return setting.data != null ? !!setting.data.value : true;
    } catch (error) {
      return null;
    }
  }

  async setSidebarSetting(value: boolean): Promise<void> {
    const olderValue = await this.getSidebarSetting();

    if (olderValue == null) {
      await this.create<SettingModel>(settingFlag, {
        data: {
          id: sidebarSettingFlag,
          value,
        },
      });
    } else {
      await this.update<SettingModel>(settingFlag, {
        id: sidebarSettingFlag,
        data: {
          id: sidebarSettingFlag,
          value,
        },
        previousData: {
          id: sidebarSettingFlag,
          value,
        },
      });
    }
  }

  async getLocale(): Promise<string | null> {
    try {
      const setting = await this.getOne<SettingModel>(settingFlag, {
        id: localeFlag,
      });
      return setting.data != null ? `${setting.data.value}` : null;
    } catch (error) {
      return null;
    }
  }

  async setLocale(value: string): Promise<void> {
    const olderValue = await this.getLocale();

    if (olderValue == null) {
      await this.create<SettingModel>(settingFlag, {
        data: {
          id: localeFlag,
          value,
        },
      });
    } else {
      await this.update<SettingModel>(settingFlag, {
        id: localeFlag,
        data: {
          id: localeFlag,
          value,
        },
        previousData: {
          id: localeFlag,
          value,
        },
      });
    }
  }

  async appInitialProcess(appState: CustomeAppState): Promise<CustomeAppState> {
    const customeAppState = appState;

    customeAppState.customReducer.locale = (await this.getLocale()) || 'zh';
    customeAppState.admin.ui.sidebarOpen = !!(await this.getSidebarSetting());

    return customeAppState;
  }
}

export const dataProviderInstance = new DataProviderFactory();

function Generator(): rc.DataProvider {
  return dataProviderInstance;
}

export default Generator;
