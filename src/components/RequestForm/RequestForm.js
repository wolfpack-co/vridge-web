import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CrossIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
}));

const RequestForm = ({ product }) => {
  const classes = useStyles();

  return (
    <div>
      <h2 id="transition-modal-title">{product.name}</h2>
      <p id="transition-modal-description">
        {product.creator.name} - fl. {product.creator.floor} ap. {product.creator.apartment}{' '}
      </p>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => console.log('requesting')}
      >
        <CheckIcon />
      </Fab>
      <Fab
        color="default"
        aria-label="add"
        className={classes.fab}
        onClick={() => console.log('canceling')}
      >
        <CrossIcon />
      </Fab>
    </div>
  );
};

export default RequestForm;
