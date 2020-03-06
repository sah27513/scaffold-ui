import React from 'react';
import { List, ListItem, ListItemText, Paper, Popover, ClickAwayListener, ButtonGroup, Button } from '@material-ui/core';
import { ArrowDropDown, CloudUpload } from '@material-ui/icons';

export const DropDown = props => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleInput = event => {
    props.handleFiles(event.target.files);
    handleClose(event);
  };

  return (
    <React.Fragment>
      <ButtonGroup size="small" variant="contained" color="primary" ref={anchorRef} aria-label="split button">
        <Button startIcon={<CloudUpload />} component="label" onInput={handleInput}>
          Upload File
          <input type="file" hidden multiple />
        </Button>
        <Button
          color="primary"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <List disablePadding>
              <ListItem component="label" button onChange={handleInput}>
                <CloudUpload />
                <ListItemText
                  className={props.className}
                  primary="
                  Upload Folder
                "
                />
                <input type="file" hidden webkitdirectory="true" mozdirectory="true" multiple />
              </ListItem>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popover>
    </React.Fragment>
  );
};
