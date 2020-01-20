import { blue, red, brown, amber, deepOrange, green } from '@material-ui/core/colors';

export const leftDrawerWidth = 240;
export const rightDrawerWidth = leftDrawerWidth + 100;
export const appBarHeight = 48;

export const spacer = { flex: 1 };

export const menuButton = theme => ({
  marginLeft: theme.spacing(1)
});

export const hide = {
  display: 'none !important'
};

export const primaryButton = {
  color: 'white'
};

export const margin = theme => ({
  margin: theme.spacing(1)
});

export const textPrimary = theme => ({
  color: theme.palette.primary.contrastText
});

export const iconColors = theme => ({
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500]
  },
  brown: {
    color: theme.palette.getContrastText(brown[800]),
    backgroundColor: brown[800]
  },
  amber: {
    color: theme.palette.getContrastText(amber[700]),
    backgroundColor: amber[700]
  },
  lightOrange: {
    color: theme.palette.getContrastText(deepOrange[200]),
    backgroundColor: deepOrange[200]
  },
  green: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[900]
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500]
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
});
