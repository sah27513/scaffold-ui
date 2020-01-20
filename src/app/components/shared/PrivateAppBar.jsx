import React from 'react';
import { AppBar as MAppBar, Toolbar, Badge, IconButton, Avatar } from '@material-ui/core';
import { Notifications as NotificationsIcon, AccountCircle, HelpOutline } from '@material-ui/icons';

// Local Dependencies
import { useStyles } from 'app/styles/components/AppBar';
import Logo from 'app/components/shared/Logo';
import { GlobalSearch as Search } from 'app/components/search/Global';
import Loadable from '@loadable/component';

// Menus
const AuthMenu = Loadable(() => import('app/components/menus/Auth'));
const SearchMenu = Loadable(() => import('app/components/menus/Search'));

/**
 * Method to render the Application Nav Bar
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const PrivateAppBar = props => {
  // Add the JSS Classes
  const classes = useStyles();
  const { user } = props;
  const initials = `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;

  // Get the Count of notifications
  const notificationCount = props.notifications.length;
  const label = `show ${notificationCount} new notifications`;

  return (
    <div className={classes.root}>
      <MAppBar position="fixed" className={classes.privateAppBar}>
        <Toolbar variant="dense">
          <Logo aria-label="open drawer" />
          <Search {...props} />
          <IconButton className={classes.menuButton} aria-label="help" color="inherit">
            <Badge color="secondary">
              <HelpOutline />
            </Badge>
          </IconButton>
          <IconButton className={classes.menuButton} aria-label={label} color="inherit" onClick={props.handleDrawerOpen}>
            <Badge badgeContent={notificationCount} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.menuButton}
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => props.handleMenuOpen('profile')}
          >
            <Avatar className={classes.purple}>{initials}</Avatar>
          </IconButton>
          <div className={classes.menu} ref={props.menuRef} id="app-bar" />
        </Toolbar>
      </MAppBar>

      {/* Hidden Components */}
      <AuthMenu anchorRef={props.menuRef} toggleOpen={props.handleMenuOpen} handleListKeyDown={props.handleListKeyDown} {...props} />
      <SearchMenu anchorRef={props.searchRef} toggleOpen={props.handleMenuOpen} handleListKeyDown={props.handleListKeyDown} {...props} />
    </div>
  );
};
