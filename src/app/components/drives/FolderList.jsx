import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowDropDown, ArrowRight, Folder } from '@material-ui/icons';
import { Tree } from 'app/components/shared/Tree';

import { useStyles } from 'app/styles/drives/FolderList';

export const FolderList = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.folders.length > 0 && props.folders.filter(folder => folder.parentDir === props.drivePanel.current.folderId).length > 0 ? (
        <Tree />
      ) : (
        <Tree />
      )}
    </React.Fragment>
  );
};
