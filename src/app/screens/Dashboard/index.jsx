import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useStyles } from 'app/styles/screens/Dashboard';
import { NavCrumbs } from 'app/components/Shared/Breadcrumbs';
import { Grid, Typography } from '@material-ui/core';
import { Circular } from 'app/components/progress/Circular';

// Dispatchers

// Menus

export const HomeScreen = props => {
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
    const parts = window.location.hash.split('/').filter(part => part !== '#');
    console.log(parts);
    props.requestItems(parts[0]);
  }, []);
  console.log(props.items);

  return (
    <div className={classes.dashboard}>
      <NavCrumbs {...props} />
      <Grid container justify="center" alignItems="center" className={classes.container}>
        {props.fetching ? (
          <Circular />
        ) : (
          <React.Fragment>
            {props.items.length > 0 ? (
              <div />
            ) : (
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12}>
                  <Typography align="center" variant="h6" color="textPrimary">
                    No Items to Display
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" color="textPrimary">
                    Upload a file or create a file to get started
                  </Typography>
                </Grid>
              </Grid>
            )}
          </React.Fragment>
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
