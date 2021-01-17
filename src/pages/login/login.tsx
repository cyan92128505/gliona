import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import { Notification, useTranslate, useLogin, useNotify } from 'react-admin';
import { LoginProps } from 'ra-ui-materialui/lib/auth/Login';
import { Button, Card, CardActions, CircularProgress, TextField } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { customTheme } from '../../theme/custom_theme';
import { AppMainLogo } from '../../components/shared/app_icons';
import { setSuperUser } from '../../redux/actions';
import env from '../../config/env';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&::after': {
      content: `"${env.copyRight}"`,
      color: '#fff',
      position: 'absolute',
      bottom: 8,
      right: 8,
      zIndex: 1,
    },
  },
  card: {
    minWidth: 300,
    marginTop: '8em',
  },
  avatar: {
    marginTop: '2em',
    marginBottom: '2em',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
  },
  hint: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[500],
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    marginTop: '1em',
  },
  actions: {
    padding: '0 1em 1em 1em',
  },
}));

interface FormValues {
  username?: string;
  password?: string;
}

const { Form } = withTypes<FormValues>();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const classes = useStyles();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation<{ nextPathname: string } | null>();
  const dispatch = useDispatch();

  const onSubmit = (auth: FormValues) => {
    setLoading(true);
    login(auth, location.state ? location.state.nextPathname : '/')
      .then(() => dispatch(setSuperUser(true)))
      .catch((error: Error) => {
        setLoading(false);
        let errorMessage = '';

        if (typeof error === 'string') {
          errorMessage = error;
        } else if (typeof error === 'undefined' || !error.message) {
          errorMessage = 'ra.auth.sign_in_error';
        } else {
          errorMessage = error.message;
        }

        notify(errorMessage, 'warning');
      });
  };

  const validate = (values: FormValues) => {
    const errors: FormValues = {};
    if (!values.username) {
      errors.username = translate('ra.validation.required');
    }
    if (!values.password) {
      errors.password = translate('ra.validation.required');
    }
    return errors;
  };

  const renderInput = ({
    meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps },
    ...props
  }): JSX.Element => (
    <TextField error={!!(touched && error)} helperText={touched && error} {...inputProps} {...props} fullWidth />
  );

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.main}>
            <Card className={classes.card}>
              <div className={classes.avatar}>
                <AppMainLogo fill="#000000" />
              </div>
              <div className={classes.form}>
                <div className={classes.input}>
                  <Field name="username" label={translate('ra.auth.username')} disabled={loading}>
                    {renderInput}
                  </Field>
                </div>
                <div className={classes.input}>
                  <Field name="password" label={translate('ra.auth.password')} type="password" disabled={loading}>
                    {renderInput}
                  </Field>
                </div>
              </div>
              <CardActions className={classes.actions}>
                <Button variant="contained" type="submit" color="primary" disabled={loading} fullWidth>
                  {loading && <CircularProgress size={25} thickness={2} />}
                  {translate('ra.auth.sign_in')}
                </Button>
              </CardActions>
            </Card>
            <Notification />
          </div>
        </form>
      )}
    />
  );
};

export default (props: LoginProps): JSX.Element => {
  return (
    <ThemeProvider theme={createMuiTheme(customTheme)}>
      <Login {...props} />
    </ThemeProvider>
  );
};
