import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useStyles } from 'app/styles/screens/Dashboard';
import { NavCrumbs } from 'app/components/shared/Breadcrumbs';
import { Grid, Typography } from '@material-ui/core';
import { Circular } from 'app/components/progress/Circular';
import { CloudUpload } from '@material-ui/icons';

// Dispatchers

// Menus

export const Settings = props => {
  const classes = useStyles();

  return <div className={classes.dashboard}></div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
