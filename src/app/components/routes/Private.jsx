import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Local Depdencies
import { PrivateLayout } from 'app/components/layouts/Private';

// Menus
export const PrivateRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = navProps => (props.isAuth ? <PrivateLayout Screen={Screen} {...props} /> : <Redirect to="/" />);

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
