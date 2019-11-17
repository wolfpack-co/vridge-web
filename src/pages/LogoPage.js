import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#3f51b5',
    color: '#fff',
    justifyItems: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '200px',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    paddingTop: '200px',
  },
  icon: {
    fontSize: '180px',
  },
}));

const LogoPage = ({ children, tabs }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        <KitchenIcon className={classes.icon} />
        Vridge
      </Typography>
    </div>
  );
};

export default LogoPage;
