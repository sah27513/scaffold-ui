import React from 'react';
import { Grid, Paper, Typography, FormControlLabel, Checkbox, Button, Link, CircularProgress } from '@material-ui/core';
import FormBase, { renderTextField } from 'app/components/forms/Base';
import { Field } from 'redux-form';
import { useStyles } from 'app/styles/components/AuthMenu';
import { CMSLogo } from 'app/components/shared';
import clsx from 'clsx';

const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
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

export const LoadingComponent = props => <CircularProgress color="secondary" />;

export const AuthForm = props => {
  const { pristine, submitting, loading, login } = props;
  const classes = useStyles();

  const handleSubmit = values => {
    login(values);
  };

  return (
    <Grid container justify="center" direction="column" alignItems="center" className={classes.root} component="main">
      <Paper className={classes.paper}>
        <div className={classes.formContainer}>
          {loading && (
            <Grid container justify="center">
              <LoadingComponent />
            </Grid>
          )}
          <CMSLogo />
          <Form name="Login" className={classes.form} onSubmit={handleSubmit}>
            <Field
              disabled={loading}
              name="email"
              component={renderTextField}
              label="Email"
              variant="outlined"
              required
              id="email"
              autoComplete="email"
              fullWidth
              className={clsx(classes.margin, { [classes.formField]: true })}
            />
            <Field
              disabled={loading}
              variant="outlined"
              component={renderTextField}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={clsx(classes.margin, { [classes.formField]: true })}
            />
            <FormControlLabel
              value="end"
              control={<Checkbox checked disabled classes={{ root: classes.radioLabel }} />}
              label="Agree to our Terms & Conditions"
              labelPlacement="end"
              classes={{ label: classes.radioLabel }}
            />
            <Button disabled={loading} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Login
            </Button>
            <Typography variant="subtitle1" classes={{ root: classes.forgot }}>
              Forgot your{' '}
              {
                <Link underline="always" color="inherit">
                  User ID
                </Link>
              }{' '}
              or your{' '}
              {
                <Link underline="always" color="inherit">
                  Password?
                </Link>
              }
            </Typography>
          </Form>
        </div>
      </Paper>
      <Paper className={classes.footer}>
        <div className={classes.footerButton}>
          <Button disabled={loading} type="submit" fullWidth variant="contained" color="primary" className={classes.newRegistration}>
            New User Registration
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
