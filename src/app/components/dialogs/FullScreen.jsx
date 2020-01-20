import React from 'react';
import clsx from 'clsx';
import { Dialog } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Drawer';

export const FullScreen = ({ drawers, ...props }) => {
  const classes = useStyles();

  // Extract Relevant Drawer Data
  const { open, Component } = drawers.fullscreen;

  return (
    <Dialog disableBackdropClick open={open} className={classes.dialog} fullScreen>
      {Component ? <Component {...props} /> : <div />}
    </Dialog>
  );
};

export default FullScreen;
