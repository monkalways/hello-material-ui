import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

// const mapDispatchToProps = dispatch => {
//   return {
//     handleSignIn: () => {
//       dispatch(
//         operations.openModal({
//           title: 'Welcome back',
//           description: 'Login in your account.',
//         }),
//       );
//     },
//   };
// };

const LoginContainer = () => (
  <LoginComponent onSubmit={values => console.log(values)} />
);

// const ConnectedLoginContainer = connect(
//   null,
//   mapDispatchToProps,
// )(LoginContainer);

export default LoginContainer;
