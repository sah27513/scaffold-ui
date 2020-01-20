import React from 'react';
import { ClickAwayListener, Popper, Paper, Grow } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Menu';

export const Menu = props => {
  const classes = useStyles();

  return (
    <Popper
      open={props.open || false}
      anchorEl={props.anchorEl}
      className={classes.popper}
      role={undefined}
      placement={props.placement}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow {...TransitionProps} style={{ transformOrigin: 'center bottom' }}>
          <Paper className={classes.root}>
            <ClickAwayListener onClickAway={props.toggleOpen}>{props.children}</ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
