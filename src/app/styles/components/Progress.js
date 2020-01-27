import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));
