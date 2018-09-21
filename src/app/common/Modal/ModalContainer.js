import { connect } from 'react-redux';
import ModalComponent from './ModalComponent';

import { operations } from '../duck';

const mapStateToProps = state => {
  const { modal } = state.common;
  return {
    isModalOpen: modal.isModalOpen,
    title: modal.title,
    description: modal.description,
  };
};

const ModalContainer = connect(
  mapStateToProps,
  { closeModal: operations.closeModal },
)(ModalComponent);

export default ModalContainer;
