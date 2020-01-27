import React from 'react';
import { IconButton, Grid, Typography, Divider } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useStyles } from 'app/styles/components/Drawer';

export const RightHeader = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Typography variant="h5" classes={{ root: classes.drawerLabel }}>
          {props.label}
        </Typography>
        <IconButton onClick={() => props.toggleDrawer('right', { open: false })}>
          <Close />
        </IconButton>
      </Grid>
      <Divider />
    </div>
  );
};
