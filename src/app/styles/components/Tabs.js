import { makeStyles, darken } from '@material-ui/core/styles';
import { menuButton } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    flex: 1,
    fontWeight: theme.typography.fontWeightBold,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff'
    }
  },
  selected: {},

  wrapper: {
    '& > svg': {
      marginRight: 10,
      marginLeft: '-10px'
    },
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row'
  },
  tabs: {
    backgroundColor: theme.palette.background.default
  },
  tabIndicator: {
    width: 120
  }
}));
