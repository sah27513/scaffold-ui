import React from 'react';
import { Paper, Link, Breadcrumbs, Typography, Button } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Breadcrumbs';
import { Add, CloudUpload } from '@material-ui/icons';

export const NavCrumbs = props => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs role="breadcrumb" aria-label="breadcrumb" className={classes.crumbs}>
        <Link role="link" tabIndex={0} aria-current="page" className={classes.link} href={`#/${props.drivePanel.current.folderName}`}>
          <Typography variant="h5" className={classes.label} component="a" role="link" tabIndex="0">
            {props.drivePanel.current.folderName}
          </Typography>
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
      <div>
        <Button size="small" startIcon={<Add />} variant="contained" className={classes.margin}>
          New Folder
        </Button>
        <Button size="small" startIcon={<CloudUpload />} color="primary" variant="contained">
          Upload File
        </Button>
      </div>
    </Paper>
  );
};
