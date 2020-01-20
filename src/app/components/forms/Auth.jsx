import React from 'react';
import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Container
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormBase, { renderTextField } from 'app/components/forms/Base';
import { Field } from 'redux-form';
import { Lock, AccountCircle, VpnKey as Key } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from 'app/styles/components/AuthMenu';

const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const Form = FormBase({ name: 'Login', validate });

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const AuthForm = props => {
  const { pristine, submitting, login } = props;
  const classes = useStyles();

  const handleSubmit = values => {
    // e.persist();
    // e.preventDefault();
    login(values);
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Form name="Login" className={classes.form} onSubmit={handleSubmit}>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          variant="outlined"
          required
          id="email"
          autoComplete="email"
          fullWidth
          className={classes.margin}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <Field
          variant="outlined"
          component={renderTextField}
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          className={classes.margin}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            )
          }}
        />
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Form>
    </div>
  );
};

export default AuthForm;
