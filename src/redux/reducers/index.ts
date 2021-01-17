/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';

import { SET_SUPER_USER, SetSuperUser, SET_LOCALE, SetLocale } from '../actions';
import { CustomReducerState } from '../../types';

type ActionTypes = SetSuperUser | SetLocale | { type: 'OTHER_ACTION' };

const defaultState: CustomReducerState = {
  isSuperUser: false,
  locale: 'zh',
};

export const customReducer: Reducer<any> = (previousState = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_SUPER_USER:
      return {
        ...previousState,
        isSuperUser: action.payload,
      };
    case SET_LOCALE:
      return {
        ...previousState,
        locale: action.payload,
      };
    default:
      return previousState;
  }
};

export default { customReducer };
