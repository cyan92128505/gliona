import React from 'react';
import { Route } from 'react-router-dom';
// import Scanner from './scanner/scanner';

import SettingList from '../resources/setting/list';
import Dashboard from './dashboard/dashboard';
import Jennider from './jennider/jennider';

export default [
  <Route exact path="/dashboard" component={Dashboard} />,
  <Route exact path="/setting" component={SettingList} />,
  <Route exact path="/jennider" component={Jennider} />,
];
