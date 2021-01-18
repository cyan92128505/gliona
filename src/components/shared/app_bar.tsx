/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { cloneElement, Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppBar as MUIAppBar, IconButton, Toolbar, Tooltip, Typography, useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { setSidebarVisibility, useTranslate } from 'ra-core';
import { LoadingIndicator, UserMenu, HideOnScroll } from 'ra-ui-materialui';

import { AppMainLogo } from './app_icons';
import { CustomeAppState } from '../../types';

const useStyles = makeStyles(
  (theme) => ({
    toolbar: {
      paddingRight: 24,
    },
    menuButton: {
      marginLeft: '0.5em',
      marginRight: '0.5em',
    },
    menuButtonIconClosed: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      transform: 'rotate(0deg)',
    },
    menuButtonIconOpen: {
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      transform: 'rotate(180deg)',
    },
    title: {
      margin: '8px',
      flex: 1,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    spacer: {
      flex: 1,
    },
    titleIcon: {
      margin: '4px',
      width: 48,
      height: 48,
      color: '#fff',
    },
  }),
  { name: 'RaAppBar' }
);

const AppBar = (props: any): JSX.Element => {
  const {
    children,
    classes: classesOverride,
    className,
    color = 'secondary',
    logout,
    open,
    title,
    userMenu,
    ...rest
  } = props;

  const classes = useStyles(props);
  const dispatch = useDispatch();
  const isXSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'));
  const translate = useTranslate();

  return (
    <HideOnScroll>
      <MUIAppBar className={className} color={color} {...rest}>
        <Toolbar disableGutters variant={isXSmall ? 'regular' : 'dense'} className={classes.toolbar}>
          <Tooltip
            title={translate(open ? 'ra.action.close_menu' : 'ra.action.open_menu', {
              _: 'Open/Close menu',
            })}
            enterDelay={500}
          >
            <IconButton
              color="inherit"
              onClick={() => {
                dispatch(setSidebarVisibility(!open));
              }}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon
                classes={{
                  root: open ? classes.menuButtonIconOpen : classes.menuButtonIconClosed,
                }}
              />
            </IconButton>
          </Tooltip>
          <Link to="/">
            <AppMainLogo className={classes.titleIcon} fill="#ffffff" />
          </Link>
          {Children.count(children) === 0 ? (
            <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title">
              GLIONA {'  '}
            </Typography>
          ) : (
            children
          )}
          <span className={classes.spacer} />
          <LoadingIndicator />
          {cloneElement(<UserMenu icon={<AccountCircle />} />, { logout })}
        </Toolbar>
      </MUIAppBar>
    </HideOnScroll>
  );
};

export default AppBar;
