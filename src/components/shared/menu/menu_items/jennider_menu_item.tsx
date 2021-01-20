import * as React from 'react';
import { FC } from 'react';
import { useTranslate } from 'ra-core';

import { DashboardMenuItemProps } from 'react-admin';

import { MenuItemLink } from 'ra-ui-materialui';
import { i18nProxy } from '../../../../i18n/language_proxy';
import JinjaIcon from '../../icons/jinja';

const JenniderMenuItem: FC<DashboardMenuItemProps> = ({ locale, onClick, ...props }) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      onClick={onClick}
      to="/jennider"
      primaryText={translate(i18nProxy.resources.jennider.name())}
      leftIcon={<JinjaIcon />}
      exact
      {...props}
    />
  );
};

export default JenniderMenuItem;
