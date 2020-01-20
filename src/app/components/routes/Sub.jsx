import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

// Local Depdencies
import { PrivateRoute } from 'app/components/routes/Private';

// Menus
export const SubRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = navProps => <PrivateRoute Screen={Screen} {...props} />;

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
