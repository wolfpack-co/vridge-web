import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import UndoIcon from '@material-ui/icons/Undo';
import useAxios from 'axios-hooks';
import React, { useState } from 'react';
import FridgeItem from './FridgeItem';
import useStyles from './useStyles';

const Fridge = () => {
  const [{ data: products, loading, error }] = useAxios('/products');
  const [{ data, loading, error }, returnToFridge] = useAxios(
    { url: `products`, method: 'put' },
    { manual: true }
  );
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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await returnToFridge({ data: { shared: false } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products
          .filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
          .map(product => (
            <div key={product.id}>
              <FridgeItem product={product}>
                <IconButton edge="end" aria-label="undo" onClick={handleSubmit}>
                  <UndoIcon />
                </IconButton>
              </FridgeItem>
              {/* </Swipeable> */}
              <Divider variant="inset" component="li" />
            </div>
          ))}
      </List>
    </div>
  );
};

export default Fridge;
