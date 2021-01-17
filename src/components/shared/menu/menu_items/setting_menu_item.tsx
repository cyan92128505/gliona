/* eslint-disable react/prop-types */
import * as React from 'react';
import { FC } from 'react';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { useTranslate } from 'ra-core';

import { DashboardMenuItemProps } from 'react-admin';

import { MenuItemLink } from 'ra-ui-materialui';
import { i18nProxy } from '../../../../i18n/language_proxy';
import { SettingIcon } from '../../../../resources/setting/list';

const SettingMenuItem: FC<DashboardMenuItemProps> = ({ locale, onClick, ...props }) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      onClick={onClick}
      to="/setting"
      primaryText={translate(i18nProxy.resources.setting.name())}
      leftIcon={<SettingIcon />}
      exact
      {...props}
    />
  );
};

export default SettingMenuItem;
