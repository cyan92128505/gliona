import axios, { AxiosInstance, AxiosResponse } from 'axios';

import * as rc from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';
import localStorageDataProvider from 'ra-data-local-storage';
import { firebaseAuthProvider } from './auth_provider';
import { StateCodeType } from './error_provider';

import GeneralResponse from '../models/general_response';
import AccountInfo from '../models/user/account_info';
import * as ownerType from '../models/group/owner';

import env from '../config/env';
import SettingModel from '../resources/setting/model';
import { CustomeAppState } from '../types';

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

  settingFlag = 'setting';

  sidebarSettingFlag = 'sidebar';

  localeFlag = 'locale';

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
      defaultData: { setting: [{ id: this.sidebarSettingFlag, value: true }] },
      localStorageKey: `${env.appName}`,
      loggingEnabled: false,
      localStorageUpdateDelay: 100,
    });
  }

  setupErrorMessageEmitter(method: (message: string) => void) {
    this.showErrorMessage = method;
  }

  getList<T extends rc.Record>(resource: string, params: rc.GetListParams): Promise<rc.GetListResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.getList(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.GetListResult<T> = {} as rc.GetListResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  getOne<T extends rc.Record>(resource: string, params: rc.GetOneParams): Promise<rc.GetOneResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.getOne(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.GetOneResult<T> = {} as rc.GetOneResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  getMany<T extends rc.Record>(resource: string, params: rc.GetManyParams): Promise<rc.GetManyResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.getMany(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.GetManyResult<T> = {} as rc.GetManyResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  getManyReference<T extends rc.Record>(
    resource: string,
    params: rc.GetManyReferenceParams
  ): Promise<rc.GetManyReferenceResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.getManyReference(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.GetManyReferenceResult<T> = {} as rc.GetManyReferenceResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  update<T extends rc.Record>(resource: string, params: rc.UpdateParams): Promise<rc.UpdateResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.update(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.UpdateResult<T> = {} as rc.UpdateResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  updateMany(resource: string, params: rc.UpdateManyParams): Promise<rc.UpdateManyResult> {
    if (resource === this.settingFlag) {
      return this.localStorage.updateMany(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.UpdateManyResult = {} as rc.UpdateManyResult;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  create<T extends rc.Record>(resource: string, params: rc.CreateParams): Promise<rc.CreateResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.create(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.CreateResult<T> = {} as rc.CreateResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  delete<T extends rc.Record>(resource: string, params: rc.DeleteParams): Promise<rc.DeleteResult<T>> {
    if (resource === this.settingFlag) {
      return this.localStorage.delete(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.DeleteResult<T> = {} as rc.DeleteResult<T>;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  deleteMany(resource: string, params: rc.DeleteManyParams): Promise<rc.DeleteManyResult> {
    if (resource === this.settingFlag) {
      return this.localStorage.deleteMany(resource, params);
    }

    return new Promise((resolve) => {
      const data: rc.DeleteManyResult = {} as rc.DeleteManyResult;
      const list = [];
      if (resource === this.settingFlag) {
        resolve(data);
        list.push(params);
      }
    });
  }

  async getSidebarSetting(): Promise<boolean | null> {
    try {
      const setting = await this.getOne<SettingModel>(this.settingFlag, { id: this.sidebarSettingFlag });
      return setting.data != null ? !!setting.data.value : true;
    } catch (error) {
      return null;
    }
  }

  async setSidebarSetting(value: boolean): Promise<void> {
    const olderValue = await this.getSidebarSetting();

    if (olderValue == null) {
      await this.create<SettingModel>(this.settingFlag, {
        data: {
          id: this.sidebarSettingFlag,
          value,
        },
      });
    } else {
      await this.update<SettingModel>(this.settingFlag, {
        id: this.sidebarSettingFlag,
        data: {
          id: this.sidebarSettingFlag,
          value,
        },
        previousData: {
          id: this.sidebarSettingFlag,
          value,
        },
      });
    }
  }

  async getLocale(): Promise<string | null> {
    try {
      const setting = await this.getOne<SettingModel>(this.settingFlag, { id: this.localeFlag });
      return setting.data != null ? `${setting.data.value}` : null;
    } catch (error) {
      return null;
    }
  }

  async setLocale(value: string): Promise<void> {
    const olderValue = await this.getLocale();

    if (olderValue == null) {
      await this.create<SettingModel>(this.settingFlag, {
        data: {
          id: this.localeFlag,
          value,
        },
      });
    } else {
      await this.update<SettingModel>(this.settingFlag, {
        id: this.localeFlag,
        data: {
          id: this.localeFlag,
          value,
        },
        previousData: {
          id: this.localeFlag,
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
