import React, { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import lodashGet from 'lodash/get';
import inflection from 'inflection';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DefaultIcon from '@material-ui/icons/ViewList';
import classnames from 'classnames';
import { getResources, useTranslate, Translate, ReduxState } from 'ra-core';

import { MenuItemLink, MenuProps } from 'react-admin';

import SettingMenuItem from './menu_items/setting_menu_item';
import DashboardMenuItem from './menu_items/dashboard_menu_item';

export const MENU_WIDTH = 240;
export const CLOSED_MENU_WIDTH = 55;

const useStyles = makeStyles(
  (theme) => ({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: '0.5em',
      [theme.breakpoints.only('xs')]: {
        marginTop: 0,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '1.5em',
      },
    },
    open: {
      width: lodashGet(theme, 'menu.width', MENU_WIDTH),
    },
    closed: {
      width: lodashGet(theme, 'menu.closedWidth', CLOSED_MENU_WIDTH),
    },
    link: {
      color: theme.palette.primary.main,
    },
  }),
  { name: 'RaMenu' }
);

const translatedResourceName = (resource: any, translate: Translate) =>
  translate(`resources.${resource.name}.name`, {
    smart_count: 2,
    _:
      resource.options && resource.options.label
        ? translate(resource.options.label, {
            smart_count: 2,
            _: resource.options.label,
          })
        : inflection.humanize(inflection.pluralize(resource.name)),
  });

export interface CustomMenuProps extends MenuProps {
  hasScanner?: boolean;
}

const Menu: FC<CustomMenuProps> = (props) => {
  const { classes: classesOverride, className, dense, hasDashboard, hasScanner, onMenuClick, logout, ...rest } = props;
  const translate = useTranslate();
  const classes = useStyles(props);
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));
  const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources, shallowEqual) as Array<any>;

  // Used to force redraw on navigation
  useSelector((state: ReduxState) => state.router.location.pathname);

  const customMenuItem = [
    <SettingMenuItem key="ScannerMenuIt≥ƒem" onClick={onMenuClick} dense={dense} sidebarIsOpen={open} />,
  ];

  return (
    <div
      className={classnames(
        classes.main,
        {
          [classes.open]: open,
          [classes.closed]: !open,
        },
        className
      )}
      {...rest}
    >
      {hasDashboard && <DashboardMenuItem onClick={onMenuClick} dense={dense} sidebarIsOpen={open} />}
      {resources
        .filter((r) => r.hasList)
        .map((resource) => (
          <MenuItemLink
            key={resource.name}
            to={`/${resource.name}`}
            primaryText={translatedResourceName(resource, translate)}
            leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
            onClick={onMenuClick}
            dense={dense}
            sidebarIsOpen={open}
          />
        ))}
      {customMenuItem.map((e) => e)}
      {isXSmall && logout}
    </div>
  );
};

export default Menu;
