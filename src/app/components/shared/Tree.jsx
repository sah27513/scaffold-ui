import React from 'react';
import { Typography } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowDropDown, ArrowRight, Folder } from '@material-ui/icons';

import { useStyles } from 'app/styles/components/Tree';

function StyledTreeItem(props) {
  const classes = useStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor
      }}
      classes={{
        root: classes.itemRoot,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

export const Tree = props => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDown />}
      defaultExpandIcon={<ArrowRight />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText={props.label} labelIcon={Folder} />
    </TreeView>
  );
};
