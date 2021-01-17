import { i18nProxy } from '../i18n/language_proxy';

export enum StateCodeType {
  Success = 0,
  Denied = 101,
  Disabled = 102,
  Invalid = 201,
  InvalidId = 202,
  InvalidSN = 203,
  InvalidName = 204,
  InvalidKey = 205,
  InvalidVersion = 206,
  NotFound = 301,
  AlreadyExisted = 302,
  NonEmpty = 303,
  AuthDenied = 401,
  ServerError = 500,
  DataError = 501,
  WriteError = 502,
  DetectError = 999,
}

export default {
  codeToMessage: (code: StateCodeType): string => {
    switch (code) {
      case StateCodeType.Success:
        return i18nProxy.app.error.Success();
      case StateCodeType.Denied:
        return i18nProxy.app.error.Denied();
      case StateCodeType.Disabled:
        return i18nProxy.app.error.Disabled();
      case StateCodeType.Invalid:
        return i18nProxy.app.error.Invalid();
      case StateCodeType.InvalidId:
        return i18nProxy.app.error.InvalidId();
      case StateCodeType.InvalidSN:
        return i18nProxy.app.error.InvalidSN();
      case StateCodeType.InvalidName:
        return i18nProxy.app.error.InvalidName();
      case StateCodeType.InvalidKey:
        return i18nProxy.app.error.InvalidKey();
      case StateCodeType.InvalidVersion:
        return i18nProxy.app.error.InvalidVersion();
      case StateCodeType.NotFound:
        return i18nProxy.app.error.NotFound();
      case StateCodeType.AuthDenied:
        return i18nProxy.app.error.AuthDenied();
      case StateCodeType.AlreadyExisted:
        return i18nProxy.app.error.AlreadyExisted();
      case StateCodeType.NonEmpty:
        return i18nProxy.app.error.NonEmpty();
      case StateCodeType.ServerError:
        return i18nProxy.app.error.ServerError();
      case StateCodeType.DataError:
        return i18nProxy.app.error.DataError();
      case StateCodeType.WriteError:
        return i18nProxy.app.error.WriteError();
      case StateCodeType.DetectError:
        return i18nProxy.app.error.DetectError();
      default:
        return StateCodeType[code];
    }
  },
};
