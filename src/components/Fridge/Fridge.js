import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import useAxios from 'axios-hooks';
import React from 'react';
import FridgeItem from './FridgeItem';
import ShareProduct from './ShareProduct';
import useStyles from './useStyles';

const Fridge = () => {
  const userId = localStorage.getItem('user');

  let url = `/products/creator/${userId}`;
  const [{ data: products, loading, error }, refetch] = useAxios({
    url
  }, {
    useCache: false
  });

  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products
          .filter(product => product.shared == false && product.creator.id == userId)
          .map(product => (
            <div key={product.id}>
              <FridgeItem product={product}>
                <ShareProduct product={product} shared={false} refetch={refetch} />
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
