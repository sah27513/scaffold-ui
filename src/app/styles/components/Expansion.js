import { makeStyles } from '@material-ui/core/styles';
import { menuButton } from 'app/styles/shared';
import { darken } from '@material-ui/core/styles';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {},
  panelDetails: {
    padding: theme.spacing(2)
  },
  panelRoot: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    padding: `0 ${theme.spacing(1) + 4}px`,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  panelContent: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  selected: {
    backgroundColor: `${darken(theme.palette.background.default, 0.1)} !important`,
    borderLeft: `2px solid ${theme.palette.primary.main}`
  },
  panelLabel: {
    margin: 1.5,
    paddingLeft: theme.spacing(1)
  }
}));
