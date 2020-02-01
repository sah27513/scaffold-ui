import { makeStyles } from '@material-ui/core/styles';
import { margin, spacer } from 'app/styles/shared';

export const useStyles = makeStyles(theme => ({
  spacer,
  margin: { margin: `0 ${theme.spacing(1)}px` },
  buttonGroup: {
    display: 'flex'
  },
  root: {
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    flexWrap: 'wrap'
  },
  label: {
    padding: '3px !important'
  },
  linkHover: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    display: 'flex',
    width: '100%'
  },
  paper: {
    display: 'flex',
    borderBottom: '1px solid lightgrey',
    padding: theme.spacing(1, 2)
  },
  crumbs: {
    flex: 1,
    display: 'inline-flex'
  }
}));
