import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Tabs';

export const NavTab = ({ classes, icon: Icon, ...props }) => (
  <Tab label={props.label} classes={{ root: classes.root, wrapper: classes.wrapper }} {...props} />
);

/**
 * Method to render the Applicatio Nav Bar
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const NavTabs = props => {
  // Add the JSS Classes
  const classes = useStyles();

  return (
    <React.Fragment>
      <Tabs
        className={classes.tabs}
        value={props.driveTabs.value}
        indicatorColor="primary"
        aria-label="navigation tabs"
        classes={{
          indicator: classes.tabIndicator
        }}
      >
        <NavTab label="Drives" classes={classes} onClick={() => props.changeTab(0)} />
        <NavTab label="Smart Folders" classes={classes} onClick={() => props.changeTab(1)} />
      </Tabs>
      {props.children}
    </React.Fragment>
  );
};
