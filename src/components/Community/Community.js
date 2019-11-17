import React from 'react';
import useAxios from 'axios-hooks';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Community = () => {
  const [{ loading, error, data: users }] = useAxios('users');
  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  return (
    <List className={classes.root}>
      {users.map(user => (
        <ListItem key={user.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={user.fullName}
              src={`/avatars/${user.fullName.replace(' ', '_').toLowerCase()}.jpg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={user.fullName}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  floor {user.floor}, apartment {user.apartment}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
export default Community;
