import { createMuiTheme } from '@material-ui/core/styles';
import { typography } from 'app/config/mui/typography';

const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, lg: 1280, sm: 600, xl: 1920, md: 960 }
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width:600px)': { minHeight: 48 }
    }
  },
  direction: 'ltr',
  overrides: {},
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      standard: 300,
      short: 250,
      enteringScreen: 225,
      shorter: 200,
      leavingScreen: 195,
      shortest: 150,
      complex: 375
    }
  },
  typography,
  zIndex: {
    modal: 1300,
    snackbar: 1400,
    drawer: 1200,
    appBar: 1100,
    mobileStepper: 1000,
    tooltip: 1500
  },
  spacing: 8,
  palette: {
    tonalOffset: 0.2,
    contrastThreshold: 3,
    common: { black: '#000', white: '#fff', accent: '#5E92AB', shade: '#2B3247', success: '#3c9568', warning: '#b98530' },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    }
  },
  themeName: 'SAH Portfolio'
};

const dark = {
  ...common,
  palette: {
    ...common.palette,
    secondary: {
      main: '#80CBC4',
      light: '#99d5cf',
      dark: '#598e89',
      contrastText: '#000'
    },
    background: { default: '#201F1E', paper: '#252523', light: '#3B3A39' },
    type: 'dark',
    primary: {
      main: '#033e56',
      light: '#356477',
      dark: '#022b3c',
      contrastText: '#fff'
    }
  }
};

const light = {
  ...common,
  palette: {
    tonalOffset: 0.2,
    contrastThreshold: 3,
    secondary: {
      light: '#fffe50',
      main: '#f0cb02',
      dark: '#b99b00',
      contrastText: '#000'
    },
    background: { default: '#fff', paper: '#FBFBFB', light: '#EAEAEA' },
    type: 'light',
    primary: {
      light: '#4f7ecc',
      main: '#01529b',
      dark: '#002b6c',
      contrastText: '#fff'
    }
  }
};

export const theme = type => createMuiTheme(type === 'dark' ? dark : light);
