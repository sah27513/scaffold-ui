import React from 'react';
import { useStyles } from 'app/styles/components/Nav';

import { ListItem, List } from '@material-ui/core';

export function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main organizations" classes={{ root: classes.listRoot }}>
        {children}
      </List>
    </div>
  );
};
