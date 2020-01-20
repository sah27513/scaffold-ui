import { makeStyles } from '@material-ui/core/styles';
import { rightDrawerWidth, leftDrawerWidth, appBarHeight, spacer } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  spacer,
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100vh'
  },
  content: {
    flexGrow: 1,
    marginTop: appBarHeight,
    padding: theme.spacing(3),
    height: `calc(100% - ${appBarHeight}px)`,
    marginLeft: theme.spacing(6)
  },
  contentShiftLeft: {
    height: `calc(100% - ${appBarHeight}px)`,
    marginTop: appBarHeight,
    marginLeft: leftDrawerWidth
  },
  contentShiftRight: {
    height: `calc(100% - ${appBarHeight}px)`,
    marginTop: '0 !important',
    marginRight: rightDrawerWidth
  }
}));
