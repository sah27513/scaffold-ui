import { makeStyles } from '@material-ui/core/styles';
import { margin } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  margin: margin(theme),
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.primary.contrastText
  },
  root: {
    minWidth: 400,
    minHeight: 500
  },
  lockIcon: {
    margin: 10,
    color: '#fff',
    backgroundColor: theme.palette.primary.main
  }
}));
