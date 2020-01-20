import { makeStyles } from '@material-ui/core/styles';
import { textPrimary } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  textPrimary: textPrimary(theme),
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 230
  },
  popper: {
    zIndex: theme.zIndex.drawer + 1
  }
}));
