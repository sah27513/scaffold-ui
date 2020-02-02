import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Loadable from '@loadable/component';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Import local dependencies
import { PrivateRoute, PublicRoute } from 'app/components/routes';

// Dispatchers
import * as dispatchers from 'app/store/dispatchers';

// Application Screens
const Login = Loadable(() => import('app/screens/Login'));
const Dashboard = Loadable(() => import('app/screens/Dashboard'));
const Settings = Loadable(() => import('app/screens/Settings'));
const Trash = Loadable(() => import('app/screens/Trash'));

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
          <PrivateRoute exact strict path="/MyDrive" component={Dashboard} {...props} />
          <PrivateRoute exact strict path="/settings" component={Settings} {...props} />
          <PrivateRoute exact strict path="/trash" component={Trash} {...props} />
          <PrivateRoute exact strict path="/:drive" component={Dashboard} {...props} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const state = current => ({
  // Auth State
  loading: current.auth.loading,
  isAuth: current.auth.isAuth,
  user: current.auth.user,
  drives: current.auth.drives,

  // Shared State
  theme: current.shared.theme,
  menus: current.shared.menus,
  drawers: current.shared.drawers,
  driveTabs: current.shared.tabs,
  drivePanel: current.shared.drivePanel,
  notifications: current.shared.notifications,
  help: current.shared.help,

  // Item State
  fetching: current.item.loading,
  items: current.item.list,
  files: current.item.files,
  folders: current.item.folders
});

export default connect(state, dispatchers)(AppRouter);
