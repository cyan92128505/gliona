/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Layout, LayoutProps, Notification, useNotify } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../components/shared/app_bar';
import Menu from '../components/shared/menu/menu';
import Sibebar from '../components/shared/menu/sidebar';
import { dataProviderInstance } from '../providers/data_provider';
import errorPropvider from '../providers/error_provider';
import env from '../config/env';

const useStyles = makeStyles((theme) => ({
  admin: {
    '&::after': {
      content: `"${env.copyRight}"`,
      color: theme.palette.text.disabled,
      position: 'absolute',
      bottom: 8,
      right: 8,
      zIndex: -1,
    },
  },
}));

export default (props: LayoutProps): JSX.Element => {
  const classes = useStyles();
  const notify = useNotify();

  dataProviderInstance.setupErrorMessageEmitter((message: string) => {
    const langKey = errorPropvider.codeToMessage(+message);
    notify(langKey, 'warning');
  });

  return (
    <Layout
      {...props}
      className={classes.admin}
      appBar={AppBar}
      menu={Menu}
      sidebar={Sibebar}
      notification={Notification}
    />
  );
};
