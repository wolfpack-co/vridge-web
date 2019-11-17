import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import useAxios from 'axios-hooks';
import React from 'react';
import CompleteBooking from './CompleteBooking';
import ConfirmBooking from './ConfirmBooking';
import FridgeItem from './FridgeItem';
import ShareProduct from './ShareProduct';
import useStyles from './useStyles';

const consumerStatesMap = {
  BOOKING_PENDING: (product, refetch) => <span></span>,
  BOOKING_CONFIRMED: (product, refetch) => <CompleteBooking product={product} refetch={refetch} />,
};
const creatorStatesMap = {
  AVAILABLE: (product, refetch) => <ShareProduct product={product} refetch={refetch} />,
  BOOKING_PENDING: (product, refetch) => <ConfirmBooking product={product} refetch={refetch} />,
  BOOKING_CONFIRMED: () => <span></span>,
};

const MyFridge = ({ filter }) => {
  const userId = localStorage.getItem('user');

  let url = `/products/creator/${userId}`;

  const [{ data: products, loading, error }, refetch] = useAxios(
    {
      url,
    },
    {
      useCache: false,
    }
  );

  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  let consumedProducts = products
    .filter(p => p.shared)
    .filter(p => p.consumer && p.consumer.id == userId)
    .map(p => {
      return {
        ...p,
        action: consumerStatesMap[p.status](p, refetch),
      };
    });

  let ownedProducts = products
    .filter(p => p.shared)
    .filter(p => p.creator.id == userId)
    .filter(p => p.status != 'TAKEN')
    .map(p => {
      return {
        ...p,
        action: creatorStatesMap[p.status](p, refetch),
      };
    });

  return (
    <List className={classes.root}>
      {consumedProducts
        .concat(ownedProducts)
        // .filter(filter)
        .map(product => (
          <div key={product.id} className={classes.w100}>
            <FridgeItem product={product}>{product.action}</FridgeItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
    </List>
  );
};

export default MyFridge;
