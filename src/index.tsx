import PostIcon from '@material-ui/icons/Book';
import DashboardIcon from '@material-ui/icons/Dashboard';
import localStorageDataProvider from 'ra-data-local-storage';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReactDOM from 'react-dom';
import './index.css';
import { MainObject } from './models/main';
import Dashboard from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import Post from './resources/posts';
import { myTheme } from './theme/custom_theme';

const mainObject = new MainObject();
mainObject.posts.push({ id: 0, title: 'Hello, world!' });
mainObject.posts.push({ id: 1, title: 'FooBar' });
mainObject.posts.push({ id: 2, title: 'FooBar2' });

const dataProvider = localStorageDataProvider({
  defaultData: mainObject,
  localStorageKey: '',
  loggingEnabled: true,
  localStorageUpdateDelay: 100,
});

ReactDOM.render(
  <Admin theme={myTheme} dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon} />
    <Resource name="posts" list={Post.list} icon={PostIcon} />
  </Admin>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
