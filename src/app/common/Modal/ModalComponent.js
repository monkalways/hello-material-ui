import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import Login from '../../Login';

const ModalComponent = ({
  classes,
  isModalOpen,
  closeModal,
  title,
  description,
}) => (
  <Modal open={isModalOpen} onClose={closeModal}>
    <div className={classes.modal}>
      <Typography variant="title">{title}</Typography>
      <Typography variant="subheading">{description}</Typography>
      <Login />
    </div>
  </Modal>
);

ModalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default withStyles(theme => ({
  modal: {
    position: 'absolute',
    // width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -25%)',
  },
}))(ModalComponent);
