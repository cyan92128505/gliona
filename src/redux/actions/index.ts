export const SET_SUPER_USER = 'APP/SET_SUPER_USER';

export interface SetSuperUser {
  readonly type: typeof SET_SUPER_USER;
  readonly payload: boolean;
}

export const setSuperUser = (payload: boolean): SetSuperUser => ({
  type: SET_SUPER_USER,
  payload,
});

export const SET_LOCALE = 'APP/SET_LOCALE';
export interface SetLocale {
  readonly type: typeof SET_LOCALE;
  readonly payload: string;
}

export const setLocale = (payload: string): SetLocale => ({
  type: SET_LOCALE,
  payload,
});

export default {
  SET_SUPER_USER,
  setSuperUser,
  SET_LOCALE,
  setLocale,
};
