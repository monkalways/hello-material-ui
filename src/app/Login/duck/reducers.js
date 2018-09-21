import types from './types';

/* State Shape
{
    loading: bool,
    authenticated: bool
}
*/

const loginReducerInitialState = {
  loading: false,
  authenticated: false,
};

const loginReducer = (state = loginReducerInitialState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return {
        loading: true,
      };
    case types.END_LOGIN:
      return {
        ...action,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
