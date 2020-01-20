import { makeStyles } from '@material-ui/core/styles';
import { leftDrawerWidth, rightDrawerWidth, spacer, menuButton, hide, appBarHeight } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  hide,
  spacer,
  menuButton: menuButton(theme),
  dialog: { opacity: 0.4 },
  rightDrawer: {
    backgroundColor: theme.palette.background.light,
    width: rightDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  rightDrawerDefault: {
    marginTop: 0
  },
  rightDrawerOpen: {
    paddingTop: appBarHeight,
    backgroundColor: theme.palette.background.light,
    width: rightDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  rightDrawerClose: {
    backgroundColor: theme.palette.background.light,
    overflowX: 'hidden',
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6)
    }
  },
  leftDrawer: {
    backgroundColor: theme.palette.background.light,
    width: leftDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  leftDrawerOpen: {
    backgroundColor: theme.palette.background.light,
    width: leftDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  leftDrawerClose: {
    backgroundColor: theme.palette.background.light,
    overflowX: 'hidden',
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6)
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  link: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 12
  },
  linkClose: {
    height: '100%'
  },
  label: {
    margin: '2px 10px'
  },
  button: {
    flex: 1,
    height: '100%'
  },
  icon: {
    color: theme.palette.primary.contrastText
  }
}));
