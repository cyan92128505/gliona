/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReduxState } from 'react-admin';

export interface CustomReducerState {
  isSuperUser: boolean;
  locale: string;
}

export interface CustomeAppState extends ReduxState {
  customReducer: CustomReducerState;
}

export interface ValueMap {
  [key: string]: any;
}
