import { makeStyles } from '@material-ui/core/styles';
import { rightDrawerWidth, leftDrawerWidth, appBarHeight, spacer } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  spacer,
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%'
  },
  content: {
    flexGrow: 1,
    height: `calc(100% - ${appBarHeight}px)`,
    padding: 0,
    marginLeft: theme.spacing(6)
  },
  contentShiftLeft: {
    marginLeft: leftDrawerWidth
  },
  contentShiftTop: {
    height: `calc(100% - ${appBarHeight}px - ${theme.spacing(1)}px)`
  },
  contentShiftSandbox: {
    height: `calc(100% -  102px)`
  },
  contentShiftRight: {
    marginTop: '0 !important',
    marginRight: rightDrawerWidth
  }
}));
