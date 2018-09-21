import types from './types';

const startLogin = () => ({
  type: types.START_LOGIN,
});

const endLogin = ({ authenticated }) => ({
  type: types.END_LOGIN,
  authenticated,
});

export default {
  startLogin,
  endLogin,
};
