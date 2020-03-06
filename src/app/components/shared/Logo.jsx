import React from 'react';
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Logo';

/**
 * Method to render the Applicatio Nav Bar
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const Logo = props => {
  // Add the JSS Classes
  const classes = useStyles();

  return (
    <Link className={classes.logo} href="#/" underline="none">
      <Typography className={clsx(classes.label, { [classes.publicLabel]: !props.isAuth })} variant="h6" color="primary">
        CMMI Centralized Data Exchange (CDX)
      </Typography>
    </Link>
  );
};
