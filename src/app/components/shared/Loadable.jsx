import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Progress';

/**
 * Loading Component
 * @param {object} props -- Loading Props
 */
export const Loading = props => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <CircularProgress size={175} />
    </Grid>
  );
};
