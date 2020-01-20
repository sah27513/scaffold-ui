import React from 'react';
import { MenuList, MenuItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { Menu } from 'app/components/menus/Base';
import { useStyles } from 'app/styles/components/Menu';

export const CreateProjectMenu = props => {
  const classes = useStyles();
  return (
    <Menu
      open={props.menus.createProject.open}
      anchorEl={props.anchorRef.current}
      toggleOpen={() => props.toggleOpen('createProject')}
      placement="bottom-end"
    >
      <MenuList autoFocusItem={props.menus.open} id="menu-list-grow" onKeyDown={props.handleListKeyDown}>
        <MenuItem>
          <ListItemText primary="Create from Template" classes={{ primary: classes.textPrimary }} />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Create with Defaults" classes={{ primary: classes.textPrimary }} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CreateProjectMenu;
