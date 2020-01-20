import { makeStyles } from '@material-ui/core/styles';
import { hide, menuButton, primaryButton, appBarHeight } from 'app/styles/shared';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  hide,
  primaryButton,
  root: {
    flexGrow: 1
  },
  scrolledAppBar: {
    backgroundColor: theme.palette.background.light
  },
  publicAppBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  privateAppBar: {
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menu: {
    marginTop: appBarHeight
  },
  menuButton: menuButton(theme),
  purple: {
    fontSize: '1.05rem',
    height: theme.spacing(4),
    width: theme.spacing(4),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));
