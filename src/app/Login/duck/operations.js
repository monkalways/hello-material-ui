import actions from './actions';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// login
const login = ({ username, password }) => async dispatch => {
  await dispatch(actions.startLogin());
  await timeout(3000);

  const authenticated = username === 'eps' && password === '123';

  await dispatch(actions.endLogin({ authenticated }));
};

export default {
  login,
};
