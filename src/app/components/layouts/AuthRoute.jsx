import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from 'app/components/layouts';
import { isEmpty } from 'lodash';

export const AuthRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = navProps =>
    !isEmpty(props.project) ? (
      <Redirect to={`#dashboard/${props.organization.name}/${props.project.name}`} />
    ) : (
      <Redirect to={`#dashboard/${props.organization.name}`} />
    );

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
