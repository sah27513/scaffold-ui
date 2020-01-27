import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowDropDown, ArrowRight, Folder } from '@material-ui/icons';

import { useStyles } from 'app/styles/drives/FolderList';

export const FolderList = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.folders.length > 0 && props.folders.filter(folder => folder.parentDir === props.drivePanel.current.folderId).length > 0 ? (
        <div />
      ) : (
        <Grid container justify="center">
          <Typography>No Folders to Display</Typography>
        </Grid>
      )}
    </React.Fragment>
  );
};
