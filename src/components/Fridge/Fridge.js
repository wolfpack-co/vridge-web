import React from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import useAxios from 'axios-hooks';
import useStyles from './useStyles';

const Fridge = () => {
  const { creator } = useParams();

  let url = `/products/creator/${localStorage.getItem('user')}`;
  if (creator === 'others') {
    url = `${url}/others`;
  }

  const [{ data: products, loading, error }] = useAxios(url);

  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products.map(product => (
          <div key={product.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={product.name.toLowerCase() + '.svg'}
                  src={'/icon_pack/svg/' + product.name.toLowerCase() + '.svg'}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Quantity: {product.quantity}
                    </Typography>
                    {' — by ' + product.creator.fullName}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
};

export default Fridge;
