import React from 'react';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingBottom: '100px',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  },
}));

const AuthorizedLayout = ({ children, tabs }) => {
  const classes = useStyles();

  if (!localStorage.getItem('user')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {tabs}
      <Container component="main" className={classes.main} maxWidth="sm">
        {children}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <BottomMenu />
        </Container>
      </footer>
    </div>
  );
};

export default AuthorizedLayout;
