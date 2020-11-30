import DashboardIcon from '@material-ui/icons/Dashboard';
import localStorageDataProvider from 'ra-data-local-storage';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReactDOM from 'react-dom';
import './index.css';
import { Buyer } from './models/buyer';
import { MainObject } from './models/main';
import { Rating } from './models/rating';
import { RatingType } from './models/rating_type';
import Dashboard from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import BuyerResourse from './resources/buyers';
import RatingResourse from './resources/ratings';
import { myTheme } from './theme/custom_theme';

const mainObject = new MainObject();
mainObject.buyers.push(new Buyer(0, '', [], ''));
mainObject.buyers.push(new Buyer(1, '', [], ''));
mainObject.buyers.push(new Buyer(2, '', [], ''));
mainObject.ratings.push(new Rating(0, '', new RatingType(0, '', 1), 1));
mainObject.ratings.push(new Rating(1, '', new RatingType(0, '', 1), 1));
mainObject.ratings.push(new Rating(2, '', new RatingType(0, '', 1), 1));

const dataProvider = localStorageDataProvider({
  defaultData: mainObject,
  localStorageKey: '',
  loggingEnabled: true,
  localStorageUpdateDelay: 100,
});

ReactDOM.render(
  <Admin theme={myTheme} dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon} />
    <Resource name="buyers" list={BuyerResourse.list} icon={BuyerResourse.icon} />
    <Resource name="ratings" list={RatingResourse.list} icon={RatingResourse.icon} />
  </Admin>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
