import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from 'app/styles/components/Search';

/**
 * Global Search Component
 * @param {object} props -- React Props
 * @returns {Component} -- The Global Search Component Instance
 */
export const GlobalSearch = props => {
  // Create the JSS Styles
  const classes = useStyles();

  // Return The Component
  return (
    <div ref={props.searchRef} className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};
