import React from 'react';
import { Avatar, ListItemText, ListItemIcon } from '@material-ui/core';
import Nav, { ListItemLink } from 'app/components/navs/Base';
import { useStyles } from 'app/styles/components/Nav';
import { useParams } from 'react-router-dom';

export const OrgNav = props => {
  const { organization } = useParams();
  const { user, drawers, setOrg } = props;
  const classes = useStyles();

  return (
    <Nav>
      {user.organizations.map(org => (
        <ListItemLink
          key={org.name}
          selected={organization === org.name}
          href={`#${org.name}`}
          classes={{ root: !drawers.left.open && classes.iconLink }}
          onClick={() => setOrg(org)}
        >
          <ListItemIcon>
            <Avatar variant="rounded" className={classes[org.icon.color]}>
              {org.name.charAt(0).toUpperCase()}
            </Avatar>
          </ListItemIcon>
          {drawers.left.open && (
            <ListItemText primaryTypographyProps={{ variant: 'subtitle1' }} primary={org.name} classes={{ primary: classes.textPrimary }} />
          )}
        </ListItemLink>
      ))}
    </Nav>
  );
};
