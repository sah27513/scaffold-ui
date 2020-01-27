import { makeStyles } from '@material-ui/core/styles';
import { margin } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  margin: margin(theme),
  formContainer: {
    margin: theme.spacing(6)
  },
  formField: {
    margin: `${theme.spacing(1)}px 0`
  },
  // paper: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    padding: theme.spacing(2),
    backgroundColor: '#2F8642',
    color: 'white !important'
  },
  // root: {
  //   minHeight: 500
  // },
  root: {
    height: 'calc(100% - 100px)'
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90
  },
  container: {
    height: '100%'
  },
  paper: {
    width: 500,
    marginBottom: theme.spacing(3),
    height: 422,
    backgroundColor: '#243450'
  },
  input: {
    marginLeft: 10
  },
  inputLabel: {
    marginLeft: 10
  },
  forgot: {
    marginTop: 10,
    color: 'white !important'
  },
  radioLabel: {
    color: 'white !important'
  },
  loginInput: {
    marginTop: 20,
    backgroundColor: 'white'
  },
  loginButton: {
    color: theme.palette.primary.contrastText,
    backgroundColor: '#308642'
  },
  control: {
    padding: theme.spacing(2)
  },
  loginContainer: {
    width: 450
  },
  loginPage: {
    height: 'calc(100vh - 35px)'
  },
  loginPageHeader: {
    textAlign: 'center',
    marginTop: '1.5em',
    padding: 0,
    backgroundColor: theme.palette.primary.dark
  },
  loginPageForm: {
    marginBottom: 20
  },
  loginPagePaper: {
    width: '100%',
    margin: '0 auto',
    zIndex: 99,
    display: 'block',
    marginTop: '1.5em',
    borderRadius: '.25em .25em .4em .4em',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    color: 'white',
    paddingBottom: '1.5em',
    marginBottom: '1em'
  },
  loginFormGroup: {
    marginTop: '0.5em',
    position: 'relative',
    marginBottom: 40,
    alignItems: 'flex-end',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box'
  },
  loginIcon: {
    marginRight: 3
  },
  footer: {
    width: 500,
    backgroundColor: '#243450'
  },
  footerButton: {
    margin: theme.spacing(3, 6)
  },
  newRegistration: {
    padding: theme.spacing(1.5),
    backgroundColor: '#1172BC',
    color: 'white'
  },
  loginLoading: {}
}));
