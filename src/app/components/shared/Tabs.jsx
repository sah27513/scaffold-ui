import React from 'react';
import clsx from 'clsx';
import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Tabs';
import { Home, MenuBook as Docs } from '@material-ui/icons';

export const NavTab = ({ classes, icon: Icon, ...props }) => (
  <Tab label={props.label} icon={<Icon />} classes={{ root: classes.root, wrapper: classes.wrapper }} />
);

/**
 * Method to render the Applicatio Nav Bar
 * @param {object} props -- Props Contain User Details for AppBar
 */
export const NavTabs = props => {
  // Add the JSS Classes
  const classes = useStyles();

  return (
    <Tabs
      value={0}
      indicatorColor="primary"
      aria-label="navigation tabs"
      classes={{
        indicator: classes.tabIndicator
      }}
    >
      <NavTab label="Home" icon={Home} classes={classes} />
      <NavTab label="Docs" icon={Docs} classes={classes} />
    </Tabs>
  );
};
