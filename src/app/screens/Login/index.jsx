import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { AuthForm } from 'app/components/forms/Auth';
import { useStyles } from 'app/styles/screens/Login';

export default props => {
  const classes = useStyles();

  return <AuthForm {...props} />;
};
