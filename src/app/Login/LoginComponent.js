import React from 'react';
import { compose } from 'recompose';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField, LinearProgress } from '@material-ui/core';

const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    {...input}
    label={label}
    type={type}
    className={custom.className}
    helperText={touched && error ? error : null}
    margin={custom.margin}
    error={touched && !!error}
  />
);

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = '* Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.password) {
    errors.password = '* Required';
  }

  return errors;
};

const LoginComponet = ({ classes, handleSubmit, reset, loading }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <Field
      name="username"
      component={renderTextField}
      label="User Name"
      className={classes.field}
      type="text"
    />
    <Field
      name="password"
      component={renderTextField}
      label="Password"
      className={classes.field}
      type="password"
    />
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      type="submit"
    >
      Submit
    </Button>
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      type="reset"
      onClick={reset}
    >
      Reset
    </Button>
    <LinearProgress className={classes.progress} />
  </form>
);

LoginComponet.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  withStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    field: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      width: '90%',
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 2,
    },
    progress: {
      marginTop: theme.spacing.unit * 2,
      width: '90%',
    },
  })),
  reduxForm({
    form: 'login',
    validate,
  }),
);

export default enhance(LoginComponet);
