import React, { useRef } from 'react';
import useAxios from 'axios-hooks';
import ReactNotifications from 'react-browser-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CrossIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
}));

let message = '';

const RequestForm = ({ product, onDismiss }) => {
  const [{ data, loading, error }, request] = useAxios(
    { url: `/products/${product.id}/book`, method: 'PUT' },
    { manual: true }
  );

  let ref = useRef(null);
  let message = useRef('');

  const handleRequest = async () => {
    try {
      await request({ data: { product: { bookedQuantity: product.quantity } } });
    } catch (e) {
      console.log(e);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <h2 id="transition-modal-title">{product.name}</h2>
      <p id="transition-modal-description">
        {product.creator.name} - fl. {product.creator.floor} ap. {product.creator.apartment}{' '}
      </p>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleRequest}>
        <CheckIcon />
      </Fab>
      <Fab color="default" aria-label="add" className={classes.fab} onClick={onDismiss}>
        <CrossIcon />
      </Fab>
    </div>
  );
};

export default RequestForm;
