import React from 'react';
import { Card as MCard, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Divider } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Card';
import { RightHeader } from 'app/components/drawers/RightHeader';
import { RightList } from 'app/components/drawers/RightList';
import { Info } from '@material-ui/icons';

export const Help = props => {
  const classes = useStyles();

  return (
    <div>
      <RightHeader label="Help" {...props} />
      <RightList Icon={Info} iconProps={{ color: 'primary' }} list={props.help} {...props} />
    </div>
  );
};
