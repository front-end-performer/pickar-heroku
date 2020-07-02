import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
  },
  appbar: {
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    ...theme.maxWidth,
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar} elevation={0}>
        <Toolbar variant='dense' className={classes.toolbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <img src='./assets/pickar_logo_white.png' alt='pickar logo' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
