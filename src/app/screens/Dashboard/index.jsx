import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

// Styles
import { useStyles } from 'app/styles/screens/Dashboard';

// Local Components
import { Circular } from 'app/components/progress/Circular';
import { NavCrumbs } from 'app/components/shared/Breadcrumbs';

/**
 * Home Screen
 * @param {object} props -- React Props
 */
export const HomeScreen = props => {
  // Create JSS classes
  const classes = useStyles();

  // Get the User Data
  useEffect(() => {
    props.requestItems(props.drivePanel.current.folderName);
  }, []);

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
                    Upload a file or folder to get started
                  </Typography>
                  <Typography align="center" color="textPrimary">
                    <CloudUpload fontSize="large" />
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
