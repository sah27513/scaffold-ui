import React from 'react';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Drawer';

export const RightDrawer = ({ drawers, ...props }) => {
  const classes = useStyles();

  // Extract Relevant Drawer Data
  const { open, Component } = drawers.right;

  return (
    <Drawer
      className={clsx(classes.rightDrawer, {
        [classes.rightDrawerOpen]: drawers.right.open,
        [classes.rightDrawerClose]: !drawers.right.open
      })}
      classes={{
        paper: clsx({
          [classes.rightDrawerOpen]: drawers.right.open,
          [classes.rightDrawerClose]: !drawers.right.open
        })
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      {Component && <Component {...props} />}
    </Drawer>
  );
};
