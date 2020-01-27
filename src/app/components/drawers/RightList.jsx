import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemSecondaryAction, Button, Typography, ListItemText, Divider } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Drawer';

export const RightList = ({ Icon, iconProps, ...props }) => {
  const classes = useStyles();
  console.log(props.list);

  return (
    <List className={classes.rightListRoot}>
      {props.list.map(item => (
        <ListItem key={item.title} alignItems="flex-start" classes={{ root: classes.listItemRoot }}>
          <Grid container>
            <Grid item xs={1} className={classes.listIcon}>
              <Icon {...iconProps} />
            </Grid>
            <Grid item xs={9} className={classes.listItem}>
              <ListItemText
                secondaryTypographyProps={{ className: classes.listItemDescription, display: 'block' }}
                primary={item.title}
                secondary={item.description}
              />
            </Grid>
            <Grid xs={12} item className={classes.listItemButtons}>
              <Button size="small" variant="contained" color="primary" aria-label="help details">
                More Info
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};
