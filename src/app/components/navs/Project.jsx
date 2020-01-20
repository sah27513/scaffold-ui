import React from 'react';
import clsx from 'clsx';
import { List, Avatar, ListItemText, ListItemIcon, Divider, Typography, IconButton } from '@material-ui/core';
import { Web, Dashboard, MoreVert, MoreHoriz, Shuffle, Transform, Domain } from '@material-ui/icons';
import Nav, { ListItemLink } from 'app/components/navs/Base';
import { useStyles } from 'app/styles/components/Nav';
import { capitalize } from 'lodash';

const links = [
  {
    name: 'overview',
    Icon: Dashboard
  },
  {
    name: 'screens',
    Icon: Web
  },
  {
    name: 'workflows',
    Icon: Shuffle
  },
  {
    name: 'transformations',
    Icon: Transform
  },
  {
    name: 'environment',
    Icon: Domain
  }
];

export const ProjectNav = props => {
  const { organization, project, drawers, setProject, path } = props;
  const classes = useStyles();
  console.log('PATH:', props);
  const pathName = path.split('/').reverse()[0];

  return (
    <div>
      <div className={clsx(classes.project, { [classes.projectNameClosed]: !drawers.left.open })}>
        <Avatar variant="rounded" className={clsx(classes[project.icon.color], { [classes.avatarClosed]: !drawers.left.open })}>
          {project.name.charAt(0).toUpperCase()}
        </Avatar>
        {drawers.left.open && <Typography classes={{ root: classes.projectName }}>{project.name}</Typography>}
        <IconButton>{drawers.left.open ? <MoreVert /> : <MoreHoriz />}</IconButton>
      </div>
      <div className={classes.navDivider}>
        <Divider />
      </div>
      <List classes={{ root: classes.listRoot }}>
        {links.map(link => (
          <ListItemLink
            selected={pathName === link.name}
            href={`#${organization.name}/${project.name}/${link.name}`}
            classes={{ root: !drawers.left.open && classes.projectIconLink }}
            onClick={() => setProject(project)}
          >
            <ListItemIcon>
              <link.Icon />
            </ListItemIcon>
            {drawers.left.open && (
              <ListItemText
                primaryTypographyProps={{ variant: 'subtitle1' }}
                primary={capitalize(link.name)}
                classes={{ primary: classes.textPrimary }}
              />
            )}
          </ListItemLink>
        ))}
      </List>
    </div>
  );
};
