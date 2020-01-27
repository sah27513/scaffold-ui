import React from 'react';
import clsx from 'clsx';

import { CssBaseline } from '@material-ui/core';

// Local Depdencies
import { LeftDrawer, RightDrawer } from 'app/components/drawers';
import { PrivateAppBar as AppBar } from 'app/components/shared';
import { useStyles } from 'app/styles/Router';
import { Loading } from 'app/components/shared/Loadable';
import Loadable from '@loadable/component';
import { Banner } from 'app/components/shared/Banner';
import { Notifications } from 'app/components/drawers/Notifications';
import { Help } from 'app/components/drawers/Help';

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
  const handleDrawerOpen = component => {
    const NewComponent = component === 'help' ? Help : Notifications;
    if (!open || (open && Component !== NewComponent)) {
      props.toggleDrawer('right', { open: true, Component: NewComponent });
    } else {
      props.toggleDrawer('right', { open: false, Component: Loading });
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
      {process.env.SANDBOX && <Banner {...props} />}
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
          [classes.contentShiftRight]: props.drawers.right.open,
          [classes.contentShiftSandbox]: process.env.SANDBOX
        })}
      >
        <Screen handleListKeyDown={handleListKeyDown} handleMenuOpen={handleMenuOpen} {...props} />
      </main>

      <FullScreen {...props} />
    </div>
  );
};
