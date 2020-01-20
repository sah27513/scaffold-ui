import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Loadable from '@loadable/component';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Import local dependencies
import { PrivateRoute, PublicRoute } from 'app/components/routes';

// Dispatchers
import { toggleDrawer, toggleMenu, toggleTheme } from 'app/store/shared';
import { login, logout } from 'app/store/auth/epic';

// Application Screens
const Login = Loadable(() => import('app/screens/Login'));
const Dashboard = Loadable(() => import('app/screens/Dashboard'));

/**
 * Application Router
 * @param {object} props -- Route Properties
 */
export const AppRouter = props => {
  return (
    <ThemeProvider theme={props.theme}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} {...props} />
          <PrivateRoute exact strict path="/home" component={Dashboard} {...props} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const state = current => ({
  // Auth State
  isAuth: current.auth.isAuth,
  user: current.auth.user,

  // Shared State
  theme: current.shared.theme,
  menus: current.shared.menus,
  drawers: current.shared.drawers,
  notifications: current.shared.notifications
});

const dispatch = { toggleDrawer, toggleMenu, toggleTheme, logout, login };

export default connect(state, dispatch)(AppRouter);
