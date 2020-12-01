import DashboardIcon from '@material-ui/icons/Dashboard';
import localStorageDataProvider from 'ra-data-local-storage';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReactDOM from 'react-dom';
import './index.css';
import { MainObject } from './models/main_object';
import Dashboard from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import Resourse from './resources';
import { myTheme } from './theme/custom_theme';

const mainObject = new MainObject();

const dataProvider = localStorageDataProvider({
  defaultData: mainObject,
  localStorageKey: 'gliona',
  loggingEnabled: true,
  localStorageUpdateDelay: 100,
});

ReactDOM.render(
  <Admin theme={myTheme} dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon} />
    <Resource
      name={Resourse.BuyerResource.name}
      list={Resourse.BuyerResource.list}
      icon={Resourse.BuyerResource.icon}
    />
    <Resource
      name={Resourse.BuyerSchemaResource.name}
      list={Resourse.BuyerSchemaResource.list}
      icon={Resourse.BuyerSchemaResource.icon}
    />
    <Resource
      name={Resourse.RatingResource.name}
      list={Resourse.RatingResource.list}
      icon={Resourse.RatingResource.icon}
    />
    <Resource
      name={Resourse.RatingTypeResource.name}
      list={Resourse.RatingTypeResource.list}
      icon={Resourse.RatingTypeResource.icon}
    />
  </Admin>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
