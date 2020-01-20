import React from 'react';
import { Card as MCard, CardActionArea, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Card';

export const Card = props => {
  const classes = useStyles();

  return (
    <MCard className={classes.card}>
      <CardActionArea>
        <CardHeader title={props.title} subheader={props.subtitle} className={classes.cardHeader} />
        <CardMedia className={classes.cardImage} {...props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          {props.children}
        </CardContent>
      </CardActionArea>
      <CardActions>{props.actionComponent}</CardActions>
    </MCard>
  );
};
