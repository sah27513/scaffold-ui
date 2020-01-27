import React from 'react';
import {
  IconButton,
  Grid,
  Card as MCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Divider
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useStyles } from 'app/styles/components/Drawer';
import { RightHeader } from 'app/components/drawers/RightHeader';

export const Notifications = props => {
  const classes = useStyles();

  return (
    <div>
      <RightHeader label="Notifications" {...props} />
    </div>
  );
};
