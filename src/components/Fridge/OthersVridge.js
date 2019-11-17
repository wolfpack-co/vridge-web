import React from 'react';
import useAxios from 'axios-hooks';
import useStyles from './useStyles';
import FridgeItem from './FridgeItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CompleteBooking from './CompleteBooking';
import PerformBooking from './PerformBooking';

const ProductActions = ({ product, refetch }) => {
  const userId = localStorage.getItem('user');
  const { consumer, status } = product;
  if (consumer) {
    if (consumer.id == userId && status === 'BOOKING_CONFIRMED') {
      return <CompleteBooking product={product} refetch={refetch} />;
    }
  } else {
    return <PerformBooking product={product} refetch={refetch} />;
  }
  return <span />;
};

const OthersVridge = () => {
  const classes = useStyles();
  const userId = localStorage.getItem('user');
  let url = `/products/creator/${userId}/others`;
  const [{ data: products, loading, error }, refetch] = useAxios(
    {
      url,
    },
    {
      useCache: false,
    }
  );

  if (loading || error) {
    return null;
  }

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products
          .filter(product => product.shared && product.status != 'TAKEN')
          .map(product => (
            <div key={product.id}>
              <FridgeItem product={product}>
                <ProductActions product={product} refetch={refetch} />
              </FridgeItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
      </List>
    </div>
  );
};

export default OthersVridge;
