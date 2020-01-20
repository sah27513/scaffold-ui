import { makeStyles } from '@material-ui/core/styles';
import { iconColors, appBarHeight, textPrimary } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  ...iconColors(theme),
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: appBarHeight + theme.spacing(1),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.light
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
