import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Banner } from 'app/components/shared/Banner';

export const PublicRoute = ({ component: Screen, ...props }) => {
  // Create the Navigation Closure
  const nav = navProps =>
    !props.isAuth ? (
      <React.Fragment>
        <Banner {...props} />
        <Screen {...props} />
      </React.Fragment>
    ) : (
      <Redirect to={'/MyDrive'} />
    );

  // Return the Modified route
  return <Route render={nav} {...props} />;
};
