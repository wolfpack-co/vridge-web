import { Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import BookIcon from '@material-ui/icons/Book';
import useAxios from 'axios-hooks';
import React from 'react';

const PerformBooking = ({ product, refetch }) => {
  const targetUserId = localStorage.getItem('user');
  // actions the user can perform on foreign product
  const [, bookProduct] = useAxios(
    { url: `products/${product.id}/book`, method: 'put' },
    { manual: true }
  );

  const handleBooking = async event => {
    event.preventDefault();
    try {
      await bookProduct({
        data: { id: product.id, consumer: { id: targetUserId } },
      });
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <IconButton edge="end" aria-label="undo" onClick={handleBooking}>
      <BookIcon />
    </IconButton>
  );
};

export default PerformBooking;
