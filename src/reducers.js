// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import commonReducer from './app/common/duck';

const rootReducer = combineReducers({
  common: commonReducer,

  // 3rd-party reducer
  // routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
