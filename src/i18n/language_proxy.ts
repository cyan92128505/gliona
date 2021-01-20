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
    import: string;
    draw: string;
    darwId: string;
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
    jennider: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        question: string;
        result: string;
        datetime: string;
      };
    };
    setting: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        version: string;
        sidebar: string;
      };
    };
    buyer: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        id: string;
        name: string;
        ratingTable: string;
        description: string;
        interview: string;
        visit: string;
        vet: string;
        diabetic: string;
        ointment: string;
        passenger: string;
        environmental: string;
        total: string;
        datetime: string;
      };
    };
    buyerSchema: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        id: string;
        name: string;
        ratingList: string;
        description: string;
      };
    };
    ratingType: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        id: string;
        name: string;
        baseNumber: string;
      };
    };
    rating: {
      [key: string]: StringMap | string;
      name: string;
      fields: {
        [key: string]: StringMap | string;
        id: string;
        name: string;
        ratingType: string;
        score: string;
      };
    };
  };
}

interface I18nFunc {
  app: {
    [key: string]: StringFuncMap | StringFunction;
    welcome: StringFunction;
    title: StringFunction;
    import: StringFunction;
    draw: StringFunction;
    darwId: StringFunction;
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
    jennider: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        question: StringFunction;
        result: StringFunction;
        datetime: StringFunction;
      };
    };
    setting: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        version: StringFunction;
        sidebar: StringFunction;
      };
    };
    buyer: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        id: StringFunction;
        name: StringFunction;
        ratingTable: StringFunction;
        description: StringFunction;
        interview: StringFunction;
        visit: StringFunction;
        vet: StringFunction;
        diabetic: StringFunction;
        ointment: StringFunction;
        passenger: StringFunction;
        environmental: StringFunction;
        total: StringFunction;
        datetime: StringFunction;
      };
    };
    buyerSchema: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        id: StringFunction;
        name: StringFunction;
        ratingList: StringFunction;
        description: StringFunction;
      };
    };
    ratingType: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        id: StringFunction;
        name: StringFunction;
        baseNumber: StringFunction;
      };
    };
    rating: {
      [key: string]: StringFuncMap | StringFunction;
      name: StringFunction;
      fields: {
        [key: string]: StringFuncMap | StringFunction;
        id: StringFunction;
        name: StringFunction;
        ratingType: StringFunction;
        score: StringFunction;
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
