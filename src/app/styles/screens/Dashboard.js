import { makeStyles } from '@material-ui/core/styles';
import { iconColors, primaryButton, spacer, menuButton, textPrimary } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  ...iconColors(theme),
  textPrimary: textPrimary(theme),
  spacer,
  primaryButton,
  menuButton: menuButton(theme),
  card: {
    marginRight: 15,
    backgroundColor: theme.palette.background.light,
    height: 200,
    width: 440
  },
  dashboard: {
    height: '100%',
    color: theme.palette.primary.contrastText
  },
  container: {
    height: `calc(100% - 18px)`
  },
  cardListContainer: {
    marginBottom: 10
  },
  cardContainer: {
    marginTop: 15
  },
  cardAction: {
    height: '100%'
  },
  divider: {
    margin: `0 -${theme.spacing(3)}px`
  },
  emptyList: { display: 'flex', flexDirection: 'column' },
  emptyListText: { marginTop: 25 },
  emptyListImage: { height: 300 },
  projectListItem: {
    marginBottom: 10,
    backgroundColor: theme.palette.background.light
  },
  listRoot: { backgroundColor: theme.palette.background.light }
}));
