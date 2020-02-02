import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useStyles } from 'app/styles/screens/Dashboard';
import { NavCrumbs } from 'app/components/Shared/Breadcrumbs';
import { Grid, Typography } from '@material-ui/core';
import { Circular } from 'app/components/progress/Circular';
import { CloudUpload } from '@material-ui/icons';

// Dispatchers

// Menus

export const Settings = props => {
  const { menus } = props;
  const classes = useStyles();
  const menuRef = React.useRef(null);

  const handleClick = () => {
    console.info(`You clicked me`);
  };

  const handleToggle = () => {
    if (menus.createProject.open) {
      return props.toggleMenu('', { open: false });
    }
    return props.toggleMenu('', { open: true });
  };

  // Get the User Data
  useEffect(() => {
    props.requestItems(props.drivePanel.current.folderName);
  }, []);

  return <div className={classes.dashboard}></div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
