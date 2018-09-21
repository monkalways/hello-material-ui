import { connect } from 'react-redux';
import NavBarComponent from './NavBarComponent';

import { operations } from '../duck';

const mapStateToProps = state => {
  const { drawer } = state.common;
  return {
    isDrawerOpen: drawer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: operations.openDrawer,
    openLoginModal: () => {
      dispatch(
        operations.openModal({
          title: 'Welcome back',
          description: 'Login in your account.',
        }),
      );
    },
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarComponent);

export default NavBarContainer;
