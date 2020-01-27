import React from 'react';
import clsx from 'clsx';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Settings } from '@material-ui/icons';
import { ListItemIcon, ListItemText, List, ListItem, Button, Typography, Link, Drawer, Divider, Badge } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Drawer';
import { OrgNav, ProjectNav } from 'app/components/navs';
import { isEmpty } from 'lodash';

export const LeftDrawer = props => {
  const { toggleDrawer, drawers } = props;
  const classes = useStyles();

  // Get the URL Parts to determine the current project
  const [org, selectedProject] = window.location.hash.split('/').filter(part => part !== '#');

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.leftDrawer, {
        [classes.leftDrawerOpen]: drawers.left.open
      })}
      classes={{
        paper: clsx({
          [classes.leftDrawerOpen]: drawers.left.open,
          [classes.navHeight]: process.env.SANDBOX
        })
      }}
      open={drawers.left.open}
    >
      <OrgNav {...props} />
      <div className={classes.spacer} />
      <Divider />
      {/* <div className={classes.toolbar}>
        <Button fullWidth href="#/settings" startIcon={<Settings />}>
          Settings
        </Button>
      </div> */}
      <List classes={{ root: classes.listRoot }}>
        <ListItem button>
          <ListItemIcon classes={{ root: classes.navRoot }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};
