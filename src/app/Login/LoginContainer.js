import React from 'react';
import { connect } from 'react-redux';

import LoginComponent from './LoginComponent';
import { operations } from './duck';

const mapStateToProps = state => {
  const { login } = state;
  return {
    loading: login.loading,
    authenticated: login.authenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSignIn: ({ username, password }) => {
      dispatch(
        operations.login({
          username,
          password,
        }),
      );
    },
  };
};

const LoginContainer = ({ handleSignIn, ...rest }) => (
  <LoginComponent onSubmit={values => handleSignIn(values)} {...rest} />
);

const ConnectedLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default ConnectedLoginContainer;
