import React from 'react';
import clsx from 'clsx';

import { CssBaseline } from '@material-ui/core';

// Local Depdencies
import { LeftDrawer, RightDrawer } from 'app/components/drawers';
import { PrivateAppBar as AppBar } from 'app/components/shared';
import { useStyles } from 'app/styles/Router';
import { NotificationsList } from 'app/components/lists/Notifications';
import { Loading } from 'app/components/shared/Loadable';
import Loadable from '@loadable/component';

// Menus
const FullScreen = Loadable(() => import('app/components/dialogs/FullScreen'));

export const PrivateLayout = ({ Screen, ...props }) => {
  // Create the JSS Styles
  const classes = useStyles();

  // Extract Drawer Data
  const { open, Component } = props.drawers.right;

  // Set the Drawer toggle only for notifications
  const handleMenuOpen = type => {
    if (props.menus[type].open) {
      props.toggleMenu(type, { open: false });
    } else {
      props.toggleMenu(type, { open: true });
    }
  };

  // Set the Drawer toggle only for notifications
  const handleDrawerOpen = () => {
    if (open && Component === NotificationsList) {
      props.toggleDrawer('right', { open: false, Component: Loading });
    } else {
      props.toggleDrawer('right', { open: true, Component: NotificationsList });
    }
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      props.toggleMenu('profile', { open: false });
    }
  };

  const menuRef = React.useRef(null);
  const searchRef = React.useRef(null);

  // Create the Navigation Closure
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Top Level */}
      <AppBar
        handleListKeyDown={handleListKeyDown}
        handleDrawerOpen={handleDrawerOpen}
        handleMenuOpen={handleMenuOpen}
        searchRef={searchRef}
        menuRef={menuRef}
        {...props}
      />
      <LeftDrawer {...props} />
      <RightDrawer {...props} />

      {/* Main Body */}
      <main
        className={clsx(classes.content, {
          [classes.contentShiftLeft]: props.drawers.left.open,
          [classes.contentShiftRight]: props.drawers.right.open
        })}
      >
        <Screen handleListKeyDown={handleListKeyDown} handleMenuOpen={handleMenuOpen} {...props} />
      </main>

      <FullScreen {...props} />
    </div>
  );
};
