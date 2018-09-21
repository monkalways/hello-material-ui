import types from './types';

const openDrawer = () => ({
  type: types.OPEN_DRAWER,
});

const closeDrawer = () => ({
  type: types.CLOSE_DRAWER,
});

const openModal = ({ title, description }) => ({
  type: types.OPEN_MODAL,
  title,
  description,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export default {
  openDrawer,
  closeDrawer,
  openModal,
  closeModal,
};
