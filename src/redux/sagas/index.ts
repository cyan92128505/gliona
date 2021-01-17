/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeEvery, StrictEffect } from 'redux-saga/effects';
import { SET_SIDEBAR_VISIBILITY, SetSidebarVisibilityAction } from 'ra-core';

import { dataProviderInstance } from '../../providers/data_provider';
import { SET_LOCALE, SetLocale } from '../actions';

async function setSidebar(value: boolean) {
  await dataProviderInstance.setSidebarSetting(value);
}

function* customSetSidebarVisibilitySaga(): Generator<StrictEffect, any, any> {
  yield takeEvery(SET_SIDEBAR_VISIBILITY, (action: SetSidebarVisibilityAction) => {
    setSidebar(action.payload);
  });
}

async function setLocale(value: string) {
  await dataProviderInstance.setLocale(value);
}

function* customSetLocaleSaga(): Generator<StrictEffect, any, any> {
  yield takeEvery(SET_LOCALE, (action: SetLocale) => {
    setLocale(action.payload);
  });
}

export default [customSetSidebarVisibilitySaga, customSetLocaleSaga];
