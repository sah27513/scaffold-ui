import { makeStyles } from '@material-ui/core/styles';
import { iconColors, appBarHeight, textPrimary } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  ...iconColors(theme),
  smartButton: { marginLeft: theme.spacing(1) },
  smartFilter: {
    flex: 1
  },
  smartFilterInputRoot: {
    paddingLeft: theme.spacing(1)
  },
  smartFilterInput: {
    paddingLeft: '0 !important',
    padding: theme.spacing(1)
  },
  smartContainer: {
    margin: theme.spacing(1)
  },
  containerRoot: {
    width: '100%'
  },
  listRoot: {
    padding: '0 !important'
  },
  listItemRoot: {
    padding: '0 !important'
  },
  tree: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400
  },
  selected: {
    backgroundColor: theme.palette.background.paper
  },
  root: {
    width: '100%',
    maxWidth: 360,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.light
  },
  navHeight: {
    height: `calc(100% - ${appBarHeight + theme.spacing(1)}px)`
  },
  project: {
    width: '100%',
    maxWidth: 360,
    marginTop: appBarHeight + theme.spacing(2),
    paddingLeft: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.light,
    display: 'flex'
  },
  iconLink: { paddingLeft: '4px !important' },
  projectIconLink: { paddingLeft: '12px !important', paddingBottom: '15px !important', paddingTop: '15px !important' },
  textPrimary: textPrimary(theme),
  listRoot: { padding: '0 !important' },
  navDivider: { margin: '5px 0' },
  projectName: {
    ...textPrimary(theme),
    flex: 1,
    margin: 10
  },
  projectNameClosed: { display: 'block', padding: 0 },
  avatarClosed: { marginLeft: theme.spacing(1) / 2 }
}));
