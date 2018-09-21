import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppRoutes from './AppRoutes';
import NavBar from './common/NavBar';
import Drawer from './common/Drawer';
import Modal from './common/Modal';

const App = ({ classes }) => (
  <div className={classes.root}>
    <NavBar />
    <Drawer />
    <div className={classes.content}>
      <AppRoutes />
    </div>
    <Modal />
  </div>
);

export default withStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 7,
  },
}))(App);
