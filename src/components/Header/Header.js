import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    fontSize: '30px',
    margin: '0 5px 0 0',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <KitchenIcon className={classes.icon} />
            Vridge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
