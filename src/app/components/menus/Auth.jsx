import React from 'react';
import { ListItemIcon, MenuList, MenuItem, Typography, Divider } from '@material-ui/core';
import { ExitToApp as Logout, AccountCircle } from '@material-ui/icons';
import { Menu } from 'app/components/menus/Base';

export const AuthMenu = props => {
  const handleLogout = () => {
    props.logout();
  };

  return (
    <Menu
      open={props.menus.profile.open}
      anchorEl={props.anchorRef.current}
      toggleOpen={() => props.toggleOpen('profile')}
      placement="bottom-start"
    >
      <MenuList autoFocusItem={props.menus.open} id="menu-list-grow" onKeyDown={props.handleListKeyDown}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <Typography variant="inherit" color="textPrimary">
            Profile
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <Typography variant="inherit" color="textPrimary">
            Logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AuthMenu;
