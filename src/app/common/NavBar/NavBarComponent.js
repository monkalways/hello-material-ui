import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { DRAWER_WIDTH } from '../../constants';

const NavBar = ({ classes, isDrawerOpen, openDrawer, openLoginModal }) => {
  return (
    <div>
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          isDrawerOpen && classes.appBarShift,
        )}
      >
        <Toolbar>
          <IconButton
            className={classNames(
              classes.menuButton,
              isDrawerOpen && classes.hide,
            )}
            color="inherit"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            React & Material-UI Sample Application
          </Typography>
          <Button color="inherit" onClick={openLoginModal}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
};

export default withStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12,
  },
  hide: {
    display: 'none',
  },
}))(NavBar);
