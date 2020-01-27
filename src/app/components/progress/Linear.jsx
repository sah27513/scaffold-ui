import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Progress';

export const LinearProgressBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Loading Files and Folders...</Typography>
      <LinearProgress />
    </div>
  );
};
