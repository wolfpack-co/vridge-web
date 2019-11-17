import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import useAxios from 'axios-hooks';
import React from 'react';

const ConfirmBooking = ({ product, refetch }) => {
  // actions the user can perform on foreign product
  const [, confirmBooking] = useAxios(
    { url: `products/${product.id}/confirm`, method: 'put' },
    { manual: true }
  );

  const handleConfirmation = async event => {
    event.preventDefault();
    try {
      await confirmBooking({ data: {} });
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <span style={{ fontSize: '9px' }}>{product.consumer.fullName.split(' ')[0]}</span>
      <IconButton edge="end" aria-label="confirm" onClick={handleConfirmation}>
        <CheckIcon />
      </IconButton>
    </>
  );
};

export default ConfirmBooking;
