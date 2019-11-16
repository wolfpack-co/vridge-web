import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
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
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

const AuthorizedLayout = ({ children, tabs }) => {
  const classes = useStyles();

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
