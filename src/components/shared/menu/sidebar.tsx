/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Children, cloneElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import lodashGet from 'lodash/get';
import { setSidebarVisibility, ReduxState, useLocale } from 'ra-core';
import { DRAWER_WIDTH, CLOSED_DRAWER_WIDTH } from 'ra-ui-materialui/esm/layout/Sidebar';
import { dataProviderInstance } from '../../../providers/data_provider';

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    docked: {},
    paper: {},
    paperAnchorLeft: {},
    paperAnchorRight: {},
    paperAnchorTop: {},
    paperAnchorBottom: {},
    paperAnchorDockedLeft: {},
    paperAnchorDockedTop: {},
    paperAnchorDockedRight: {},
    paperAnchorDockedBottom: {},
    modal: {},
    drawerPaper: {
      position: 'relative',
      height: '100%',
      overflowX: 'hidden',
      width: (props: { open?: boolean }) =>
        props.open
          ? lodashGet(theme, 'sidebar.width', DRAWER_WIDTH)
          : lodashGet(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH),
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: '#fff',
      borderRight: 'none',
      [theme.breakpoints.only('xs')]: {
        marginTop: 0,
        height: '100vh',
        position: 'inherit',
        backgroundColor: theme.palette.background.default,
      },
      [theme.breakpoints.up('md')]: {
        border: 'none',
      },
      zIndex: 'inherit',
    },
  }),
  { name: 'RaSidebar' }
);

const defaultOnMenuClick = () => null;

async function setSidebar(value: boolean) {
  await dataProviderInstance.setSidebarSetting(value);
}

const CustomSidebar = (props: any) => {
  const { children, closedSize, size, classes: classesOverride, ...rest } = props;
  const dispatch = useDispatch();
  const isXSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const open = useSelector<ReduxState, boolean>((state) => state.admin.ui.sidebarOpen);
  useLocale(); // force redraw on locale change
  const handleClose = () => {
    dispatch(setSidebarVisibility(false));
    setSidebar(false);
  };
  const toggleSidebar = () => {
    dispatch(setSidebarVisibility(!open));
    setSidebar(!open);
  };
  const { drawerPaper, ...classes } = useStyles({ ...props, open });

  let drawer = (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        className: drawerPaper,
      }}
      onClose={toggleSidebar}
      classes={classes}
      {...rest}
    >
      {cloneElement(Children.only(children), {
        onMenuClick: defaultOnMenuClick,
      })}
    </Drawer>
  );

  switch (true) {
    case isXSmall:
      drawer = (
        <Drawer
          variant="temporary"
          open={open}
          PaperProps={{
            className: drawerPaper,
          }}
          onClose={toggleSidebar}
          classes={classes}
          {...rest}
        >
          {cloneElement(Children.only(children), {
            onMenuClick: handleClose,
          })}
        </Drawer>
      );
      break;
    case isSmall:
      drawer = (
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            className: drawerPaper,
          }}
          onClose={toggleSidebar}
          classes={classes}
          {...rest}
        >
          {cloneElement(Children.only(children), {
            onMenuClick: handleClose,
          })}
        </Drawer>
      );
      break;

    default:
  }

  return drawer;
};

export default CustomSidebar;
