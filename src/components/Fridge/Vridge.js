import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import useAxios from 'axios-hooks';
import React from 'react';
import { useParams } from 'react-router-dom';
import CompleteBooking from './CompleteBooking';
import ConfirmBooking from './ConfirmBooking';
import FridgeItem from './FridgeItem';
import PerformBooking from './PerformBooking';
import ShareProduct from './ShareProduct';
import useStyles from './useStyles';

const Fridge = () => {
  const { creator } = useParams();
  const userId = localStorage.getItem('user');

  let url = `/products/creator/${userId}`;
  if (creator === 'others') {
    url = `${url}/others`;
  }

  const [{ data: products, loading, error }, refetch] = useAxios({
    url
  }, {
    useCache: false
  });

  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  const itemMap = (product) => {
    return {
      'others_perform_booking': <PerformBooking product={product} refetch={refetch} />,
      'others_complete_booking': <CompleteBooking product={product} refetch={refetch} />,
      'yours_unshare': <ShareProduct product={product} shared={true} refetch={refetch} />,
      'yours_confirm': <ConfirmBooking product={product} refetch={refetch} />,
    }
  }

  const targetByCreator = (creator, product) => {
    switch (creator) {
      case 'others':
        return (product.consumer || {}).id == userId ?
          'complete_booking' : 'perform_booking'
      case 'yours':
        return product.consumer != null ?
          'confirm' : 'unshare'
      default:
        throw 'Exception'
    }
  }

  const Item = ({ product }) => {
    const key = `${creator}_${
      targetByCreator(creator, product)
      }`;

    return itemMap(product)[key];
  };

  const filter = creator == "others" ? (product) => (product.shared && product.creator.id != userId) :
    (product) => product.creator.id == userId && product.shared;

  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <List className={classes.root}>
        {products
          .filter(filter)
          .map(product => (
            <div key={product.id}>
              <FridgeItem product={product}>
                <Item product={product} />
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
