import PostIcon from '@material-ui/icons/Book';
import DashboardIcon from '@material-ui/icons/Dashboard';
import localStorageDataProvider from 'ra-data-local-storage';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import Post from './resources/posts';

const dataProvider = localStorageDataProvider({
  defaultData: {
    posts: [
      { id: 0, title: 'Hello, world!' },
      { id: 1, title: 'FooBar' },
    ],
  },
  localStorageKey: '',
  loggingEnabled: true,
  localStorageUpdateDelay: 100,
});

ReactDOM.render(
  <Admin dataProvider={dataProvider}>
    <Resource name="dashboard" list={Dashboard} icon={DashboardIcon} />
    <Resource name="posts" list={Post.list} icon={PostIcon} />
  </Admin>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
