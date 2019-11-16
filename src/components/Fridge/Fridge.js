import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import useAxios from 'axios-hooks';
import React, { useState } from 'react';
import useStyles from './useStyles';


// const products = [
//   {
//     img: 'icon_pack/svg/tomato.svg',
//     name: 'Tomatoes',
//     quantity: 5,
//     creator: {
//       name: 'Milko Mitropolitsky',
//       floor: 5,
//       apartment: 12,
//     },
//   },
//   {
//     img: 'icon_pack/svg/cucumber.svg',
//     name: 'Cucumber',
//     author: 'author',
//     quantity: 2,
//     creator: {
//       name: 'Milko Mitropolitsky',
//       floor: 5,
//       apartment: 12,
//     },
//   },
//   {
//     img: 'icon_pack/svg/eggs.svg',
//     name: 'Eggs',
//     author: 'author',
//     quantity: 3,
//     creator: {
//       name: 'Milko Mitropolitsky',
//       floor: 5,
//       apartment: 12,
//     },
//   },
// ];

const Fridge = () => {
  const [{ data: products, loading, error }] = useAxios('/products');
  const [term, setTerm] = useState('');
  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  debugger;

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products
          .filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
          .map(product => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={product.name.toLowerCase() + ".svg"}
                    src={"icon_pack/svg/" + product.name.toLowerCase() + ".svg"}
                    className={classes.avatar}
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
                      {" — by " + product.creator.fullName}
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
