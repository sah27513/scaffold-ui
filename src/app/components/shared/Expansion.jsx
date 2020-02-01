import React from 'react';
import clsx from 'clsx';
import { Link, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Expansion';
import { Storage, ExpandMore } from '@material-ui/icons';

export const Expansion = props => {
  const classes = useStyles();

  const handleClick = event => {
    props.label === props.drivePanel.expanded.folderName
      ? props.setExpanded({ current: props.drive, expanded: {} })
      : props.setExpanded({ current: props.drive, expanded: props.drive });
  };

  return (
    <ExpansionPanel
      square
      expanded={props.drivePanel.expanded.folderName === props.label}
      classes={{
        root: clsx(classes.root, {
          [classes.selected]: props.selected
        })
      }}
    >
      <Link underline="none" href={`#/${props.label}`} onClick={event => event.stopPropagation()}>
        <ExpansionPanelSummary
          onClick={handleClick}
          expandIcon={<ExpandMore />}
          aria-controls={`${props.label}-content`}
          id={`${props.label}-header`}
          classes={{ root: classes.panelRoot, content: classes.panelContent }}
        >
          <Storage />
          <Typography color="primary" classes={{ root: classes.panelLabel }}>
            {props.label}
          </Typography>
        </ExpansionPanelSummary>
      </Link>
      <ExpansionPanelDetails classes={{ root: classes.panelDetails }}>{props.children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
