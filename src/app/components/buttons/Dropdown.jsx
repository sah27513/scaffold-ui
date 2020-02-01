import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

const options = ['Upload Folder'];

export const DropDown = props => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

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
          <ArrowDropDownIcon />
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
