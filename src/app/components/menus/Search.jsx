import React from 'react';
import { ListItemIcon, MenuList, MenuItem, Typography, Divider } from '@material-ui/core';
import { AccountCircle, ExitToApp as Logout } from '@material-ui/icons';
import { Menu } from 'app/components/menus/Base';

export const SearchMenu = props => {
  return (
    <Menu open={props.menus.open} anchorEl={props.anchorRef.current} toggleOpen={() => props.toggleOpen('search')}>
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
        <MenuItem>
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

export default SearchMenu;
