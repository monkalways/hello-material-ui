import { connect } from 'react-redux';
import DrawerComponent from './DrawerComponent';

import { operations } from '../duck';

const mapStateToProps = state => {
  const { drawer } = state.common;
  return {
    isDrawerOpen: drawer,
  };
};

const DrawerContainer = connect(
  mapStateToProps,
  { closeDrawer: operations.closeDrawer },
)(DrawerComponent);

export default DrawerContainer;
