import React from 'react';
import useAxios from 'axios-hooks';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import { UsageWeekly, UsedOfferedRatio } from '../Charts';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  profile: { paddingTop: '20px!important' },
}));

const Account = () => {
  const history = useHistory();
  const classes = useStyles();

  const [{ data, loading, error }] = useAxios(`/users/${localStorage.getItem('user')}`);
  if (loading || error) {
    return null;
  }

  const handleClick = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8} className={classes.profile}>
          <Typography component="div">
            <Box fontSize={18} fontWeight="fontWeightBold" m={1}>
              {data.fullName}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            className={classes.button}
            startIcon={<LockIcon />}
          >
            Log out
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.profile}>
          <UsageWeekly type="Personal" />
        </Grid>
        <Grid item xs={12} className={classes.profile}>
          <UsageWeekly type="Building" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
