import SetupDeepProxy from '../utils/deep_path';

type StringFunction = () => string;

export interface StringFuncMap {
  [key: string]: StringFuncMap | StringFunction | undefined;
}

export interface StringMap {
  [key: string]: StringMap | string | undefined;
}

interface I18n {
  app: {
    [key: string]: StringMap | string;
    welcome: string;
    title: string;
    error: {
      [key: string]: StringMap | string;
      Success: string;
      Denied: string;
      Disabled: string;
      Invalid: string;
      InvalidId: string;
      InvalidSN: string;
      InvalidSNActCode: string;
      InvalidName: string;
      InvalidKey: string;
      InvalidVersion: string;
      NotFound: string;
      AlreadyExisted: string;
      NonEmpty: string;
      AuthDenied: string;
      ServerError: string;
      DataError: string;
      WriteError: string;
      DetectError: string;
    };
    locale: {
      [key: string]: StringMap | string;
      title: string;
      zhTW: string;
      enUS: string;
    };
  };
  resources: {
    [key: string]: StringMap | string;
    setting: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        version: string;
        sidebar: string;
      };
    };
  };
}

interface I18nFunc {
  app: {
    [key: string]: StringFuncMap | StringFunction;
    welcome: StringFunction;
    title: StringFunction;
    error: {
      [key: string]: StringFuncMap | StringFunction;
      Success: StringFunction;
      Denied: StringFunction;
      Disabled: StringFunction;
      Invalid: StringFunction;
      InvalidId: StringFunction;
      InvalidSN: StringFunction;
      InvalidSNActCode: StringFunction;
      InvalidName: StringFunction;
      InvalidKey: StringFunction;
      InvalidVersion: StringFunction;
      NotFound: StringFunction;
      AlreadyExisted: StringFunction;
      NonEmpty: StringFunction;
      AuthDenied: StringFunction;
      ServerError: StringFunction;
      DataError: StringFunction;
      WriteError: StringFunction;
      DetectError: StringFunction;
    };
    locale: {
      [key: string]: StringFuncMap | StringFunction;
      title: StringFunction;
      zhTW: StringFunction;
      enUS: StringFunction;
    };
  };
  resources: {
    [key: string]: StringFuncMap | StringFunction;
    setting: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        version: StringFunction;
        sidebar: StringFunction;
      };
    };
  };
}

const i18nObject: I18nFunc = {} as I18nFunc;
export default I18n;

export const i18nProxy = SetupDeepProxy<I18nFunc>(i18nObject, {
  get(_target, _path, _receiver) {
    return this.nest(function () {});
  },
  apply(_target, _thisArg, _argList) {
    return this.path.join('.');
  },
});