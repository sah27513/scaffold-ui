import React from 'react';
import { Paper, Link, Breadcrumbs, Typography, Button } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Breadcrumbs';
import { Add, CloudUpload } from '@material-ui/icons';
import { compact } from 'lodash';
import { DropDown } from 'app/components/buttons/Dropdown';

export const NavCrumbs = props => {
  const classes = useStyles();

  const handleFiles = list => {
    const files = Array.from(list);
    const hasDirectory = files.reduce((obj, item) => item.webkitRelativePath.split('/').length > 0, false);
    const result = compact(
      files.reduce(
        (obj, item) => [...obj, !item.webkitRelativePath.split('/').includes('.DS_Store') && item.webkitRelativePath.split('/')],
        []
      )
    );
    console.log(hasDirectory);
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs role="breadcrumb" aria-label="breadcrumb" className={classes.crumbs}>
        <Link
          role="link"
          tabIndex={0}
          aria-current="page"
          variant="h5"
          className={classes.link}
          href={`#/${props.drivePanel.current.folderName}`}
        >
          {props.drivePanel.current.folderName}
        </Link>
        {/* {props.folders.map((folder, index) => {
            return (
              <Link
                role="link"
                tabIndex={0}
                className={classes.linkHover}
                key={folder.folderId}
                onClick={e => {
                  e.preventDefault();
                  props.navigateFolder(folder);
                }}
              >
                {folder.folderName}
              </Link>
            );
          })} */}
      </Breadcrumbs>
      <div className={classes.buttonGroup}>
        <Button size="small" startIcon={<Add />} variant="contained" className={classes.margin}>
          New Folder
        </Button>
        <DropDown className={classes.margin} handleFiles={handleFiles} />
      </div>
    </Paper>
  );
};
