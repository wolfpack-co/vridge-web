import React, { useRef } from 'react';
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
const RequestForm = ({ product }) => {
  let ref = useRef(null);
  let message = useRef('');

  const classes = useStyles();

  return (
    <div>
      <ReactNotifications
        onRef={r => (ref = r)}
        title="message" // Required
        body="This is the body"
        icon="icon.png"
        tag="abcdef"
        timeout="2000"
        onClick={event => ref.close(event.target.tag)}
      />

      <h2 id="transition-modal-title">{product.name}</h2>
      <p id="transition-modal-description">
        {product.creator.name} - fl. {product.creator.floor} ap. {product.creator.apartment}{' '}
      </p>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => ref.show()}>
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
