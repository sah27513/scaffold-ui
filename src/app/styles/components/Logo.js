import { makeStyles } from '@material-ui/core/styles';
import { leftDrawerWidth, spacer } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  spacer,
  // publicLabel: {
  //   color: theme.palette.primary.contrastText
  // },
  logo: {
    display: 'flex',
    flex: 1,
    width: leftDrawerWidth
  },
  label: { padding: '0 15px' }
}));
