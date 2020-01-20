import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = navProps =>
    !props.isAuth ? (
      <main>
        <Screen {...props} />
      </main>
    ) : (
      <Redirect to={`/${props.organization.name}`} />
    );

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
