import React from 'react';
import clsx from 'clsx';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Settings } from '@material-ui/icons';
import { Button, Typography, Link, Drawer, Divider, Badge } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Drawer';
import { OrgNav, ProjectNav } from 'app/components/navs';
import { isEmpty } from 'lodash';

export const LeftDrawer = props => {
  const { toggleDrawer, drawers, project } = props;
  const classes = useStyles();

  // Get the URL Parts to determine the current project
  const [org, selectedProject] = window.location.hash.split('/').filter(part => part !== '#');

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.leftDrawer, {
        [classes.leftDrawerOpen]: drawers.left.open,
        [classes.leftDrawerClose]: !drawers.left.open
      })}
      classes={{
        paper: clsx({
          [classes.leftDrawerOpen]: drawers.left.open,
          [classes.leftDrawerClose]: !drawers.left.open
        })
      }}
      open={drawers.left.open}
    >
      {!selectedProject ? <OrgNav {...props} /> : <ProjectNav {...props} />}
      <div className={classes.spacer} />
      <Divider />
      {!drawers.left.open && (
        <div className={classes.toolbar}>
          <Link className={classes.linkClose} underline="none" href="#/settings">
            <Button className={classes.button} endIcon={<Settings className={classes.icon} />}>
              <Badge />
            </Button>
          </Link>
        </div>
      )}
      <div className={classes.toolbar}>
        <Button size="small">
          <Link
            className={clsx(classes.link, {
              [classes.hide]: !drawers.left.open
            })}
            underline="none"
            href="#/settings"
          >
            <Settings className={classes.icon} />
            <Typography className={classes.label} variant="body1" color="textPrimary">
              Settings
            </Typography>
          </Link>
        </Button>
        <Button
          className={classes.button}
          fullWidth
          onClick={() => (drawers.left.open ? toggleDrawer('left', { open: false }) : toggleDrawer('left', { open: true }))}
          endIcon={drawers.left.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        >
          <Badge />
        </Button>
      </div>
    </Drawer>
  );
};
