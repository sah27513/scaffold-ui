import { makeStyles, primaryButton } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: theme.palette.background.default
  },
  cardImage: {
    [theme.breakpoints.down('lg')]: {
      minHeight: 400,
      maxHeight: 400
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: 500
    }
  },
  card: {
    height: 200,
    width: 440
  }
}));
