import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tree } from 'app/components/shared/Tree';
import { NavTabs } from 'app/components/shared/Tabs';
import { Expansion } from 'app/components/shared/Expansion';
import { Divider, InputAdornment, TextField, Grid, List, ListItem, Button } from '@material-ui/core';
import { useStyles } from 'app/styles/components/Nav';
import { LinearProgressBar } from 'app/components/progress/Linear';
import { FolderList } from 'app/components/drives/FolderList';
import { Add, FilterList } from '@material-ui/icons';

export const OrgNav = props => {
  const classes = useStyles();

  return (
    <div className={classes.containerRoot}>
      <NavTabs {...props}>
        {props.driveTabs.value === 0 ? (
          <List dense classes={{ root: classes.listRoot }}>
            {props.drives.map(drive => (
              <ListItem key={drive.folderName} classes={{ root: classes.listItemRoot, selected: classes.selected }}>
                <Expansion
                  drive={drive}
                  selected={drive.folderName === props.drivePanel.current.folderName}
                  label={drive.folderName}
                  {...props}
                >
                  {/* <Tree {...props} /> */}
                  {props.fetching ? <LinearProgressBar /> : <FolderList {...props} />}
                </Expansion>
              </ListItem>
            ))}
          </List>
        ) : (
          <div>
            <div className={classes.smartContainer}>
              <Grid container>
                <TextField
                  className={classes.smartFilter}
                  placeholder="Filter..."
                  variant="outlined"
                  InputProps={{
                    classes: { input: classes.smartFilterInput, root: classes.smartFilterInputRoot },
                    startAdornment: (
                      <InputAdornment position="start">
                        <FilterList />
                      </InputAdornment>
                    )
                  }}
                  fullWidth
                />
                <Button className={classes.smartButton} color="primary" size="small" variant="contained" startIcon={<Add />}>
                  New
                </Button>
              </Grid>
            </div>
            <Divider />
            {props.fetching ? (
              <LinearProgressBar />
            ) : (
              <List dense classes={{ root: classes.listRoot }}>
                {props.folders.map(folder => (
                  <ListItem
                    selected={folder.folderName === props.drivePanel.current.folderName}
                    key={drive.folderName}
                    classes={{ root: classes.listItemRoot, selected: classes.selected }}
                  >
                    {/* <Tree {...props} /> */}
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        )}
      </NavTabs>
    </div>
  );
};
