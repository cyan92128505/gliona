/* eslint-disable react/prop-types */
import * as React from 'react';
import { FC } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useTranslate } from 'ra-core';

import { DashboardMenuItemProps } from 'react-admin';

import { MenuItemLink } from 'ra-ui-materialui';

const DashboardMenuItem: FC<DashboardMenuItemProps> = ({ locale, onClick, ...props }) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      onClick={onClick}
      to="/"
      primaryText={translate('ra.page.dashboard')}
      leftIcon={<DashboardIcon />}
      exact
      {...props}
    />
  );
};

export default DashboardMenuItem;
