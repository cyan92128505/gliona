import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReactDOM from 'react-dom';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import chineseMessages from './i18n/ra_language_chinese';
import appChineseMessages from './i18n/app_language_chiness';
import appEnglishMessages from './i18n/app_language_english';

import AuthProvider from './providers/auth_provider';
import DataProvider from './providers/data_provider';

import './index.css';
import Layout from './pages/layout';
import Login from './pages/login/login';
import customRoutes from './pages/custom_route';
import Dashboard from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import AppResources from './resources';
import { customTheme } from './theme/custom_theme';
import env from './config/env';
import customReducers from './redux/reducers';
import customSagas from './redux/sagas';

async function initial() {
  const dataProvider = DataProvider();
  const authProvider = AuthProvider();
  let initialState = dataProvider.appState;

  try {
    initialState = await dataProvider.appInitialProcess(initialState);
  } catch (error) {
    initialState = dataProvider.appState;
  }

  const i18nProvider = polyglotI18nProvider((locale) => {
    switch (locale) {
      case 'en':
        return { ...englishMessages, ...appEnglishMessages };
      default:
        return { ...chineseMessages, ...appChineseMessages };
    }
  }, initialState.customReducer.locale);

  ReactDOM.render(
    <Admin
      title={env.appFullName}
      theme={customTheme}
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      dashboard={Dashboard}
      customRoutes={customRoutes}
      i18nProvider={i18nProvider}
      customReducers={customReducers}
      customSagas={customSagas}
      initialState={initialState}
    >
      <Resource
        name={AppResources.BuyerResource.name}
        list={AppResources.BuyerResource.list}
        icon={AppResources.BuyerResource.icon}
        create={AppResources.BuyerResource.create}
        edit={AppResources.BuyerResource.edit}
      />
      {/* <Resource
        name={AppResources.BuyerSchemaResource.name}
        list={AppResources.BuyerSchemaResource.list}
        icon={AppResources.BuyerSchemaResource.icon}
        create={AppResources.BuyerSchemaResource.create}
        edit={AppResources.BuyerSchemaResource.edit}
      />
      <Resource
        name={AppResources.RatingTypeResource.name}
        list={AppResources.RatingTypeResource.list}
        icon={AppResources.RatingTypeResource.icon}
        create={AppResources.RatingTypeResource.create}
        edit={AppResources.RatingTypeResource.edit}
      /> */}
    </Admin>,
    document.getElementById('root')
  );
}
initial();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
