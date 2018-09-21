import { combineReducers } from 'redux';
import types from './types';

/* State Shape
{
    drawer: bool,
    modal: {
      isModalOpen: bool,
      title: string
    }
}
*/

const drawerReducer = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_DRAWER:
      return true;
    case types.CLOSE_DRAWER:
      return false;
    default:
      return state;
  }
};

const modalReducerInitialState = {
  isModalOpen: false,
  title: null,
  description: null,
};

const modalReducer = (state = modalReducerInitialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...action,
        isModalOpen: true,
      };
    case types.CLOSE_MODAL:
      return {
        isModalOpen: false,
        title: null,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  drawer: drawerReducer,
  modal: modalReducer,
});

export default reducer;
