import { makeStyles } from '@material-ui/core/styles';
import { menuButton } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  root: {
    ...menuButton(theme),
    minHeight: 'auto',
    minWidth: 120
  },
  wrapper: {
    '& > svg': {
      marginRight: 10,
      marginLeft: '-10px'
    },
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row'
  },
  tabIndicator: {
    width: 120
  }
}));
