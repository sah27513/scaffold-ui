import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { AuthForm } from 'app/components/forms/Auth';
import { useStyles } from 'app/styles/screens/Login';

export default props => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <AuthForm {...props} />
      </Grid>
    </Grid>
  );
};
