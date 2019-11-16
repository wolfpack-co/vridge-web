import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CrossIcon from '@material-ui/icons/Clear';

const products = ['tomatoes', 'cucumber', 'eggs', 'pork butt'];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  productName: {
    textTransform: 'capitalize',
  },
  actions: {
    textAlign: 'center',
  },
  fab: { margin: '0 10px' },
}));

const AddToFridgeForm = ({ onDismiss }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const [{ data, loading, error }, leaveInFridge] = useAxios(
    { url: `products`, method: 'post' },
    { manual: true }
  );

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await leaveInFridge({ data: { shared: true, name, quantity, creator: { id: 1 } } });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave somthing in the Vridge</h3>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          className={classes.productName}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          onChange={event => setName(event.target.value)}
        >
          {products.map(product => (
            <MenuItem className={classes.productName} value={product}>
              {product}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label="Quantity"
          margin="normal"
          onChange={event => setQuantity(event.target.value)}
          value={quantity}
        />
      </FormControl>
      <div className={classes.actions}>
        <Fab color="primary" type="submit" aria-label="add" className={classes.fab}>
          <CheckIcon />
        </Fab>
        <Fab color="default" aria-label="add" className={classes.fab} onClick={onDismiss}>
          <CrossIcon />
        </Fab>
      </div>
    </form>
  );
};

export default AddToFridgeForm;
