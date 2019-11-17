import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import CrossIcon from '@material-ui/icons/Clear';
import useAxios from 'axios-hooks';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

const products = ["apple", "asparagus", "aubergine", "avocado", "bacon", "baguette", "banana", "beans", "biscuit", "blueberries", "boiled", "bowl", "bread", "broccoli", "butcher", "butter", "cabbage", "cake", "can", "candy", "carrot", "cauliflower", "cereals", "cheese", "chef", "cherries", "chili", "chips", "chives", "chocolate", "coconut", "coffee", "cookies", "corckscrew", "corn", "corndog", "croissant", "cucumber", "cup", "cupcake", "cutlery", "dairy", "dish", "dishes", "doughnut", "egg", "eggs", "fig", "fish", "flour", "food", "fork", "frappe", "fries", "garlic", "gingerbread", "glass", "grain", "grapes", "grater", "grinder", "groceries", "ham", "hamburguer", "hazelnut", "honey", "jam", "jawbreaker", "jelly", "kebab", "kitchen", "knife", "knives", "ladle", "lemon", "lime", "meat", "milk", "mixer", "mug", "mushroom", "mushrooms", "mustard", "noodles", "oat", "octopus", "oil", "olives", "onion", "orange", "ornating", "pan", "pancakes", "pasta", "peach", "pear", "peas", "pepper", "pickles", "pie", "pineapple", "pint", "pistachio", "pizza", "pomegranate", "popsicle", "pot", "potatoes", "pretzel", "pudding", "pumpkin", "radish", "raspberry", "rice", "risotto", "salad", "salami", "salmon", "salt", "sandwich", "sausage", "scale", "seeds", "shrimp", "sorbet", "spaguetti", "spatula", "spices", "spoon", "steak", "stew", "strainer", "strawberry", "sushi", "taco", "tea", "teapot", "teaspoon", "tenderizer", "thermos", "toast", "toaster", "toffee", "tomato", "turkey", "water", "watermelon", "whisk", "wrap"];

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
  }
}));

const AddToFridgeForm = ({ onDismiss }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const history = useHistory();
  const [value, setValue] = React.useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  const [{ data, loading, error }, leaveInFridge] = useAxios(
    { url: `products`, method: 'post' },
    { manual: true }
  );

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await leaveInFridge({ data: { shared: false, name, quantity, creator: { id: localStorage.getItem('user') } } });
      handleChange(event, '/fridge')
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
      <div>
        <Button id="btnSubmit" disabled={!(name || quantity)} variant="outlined" type="submit" color="primary" className={classes.button}>
          <CheckIcon />
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button} onClick={onDismiss}>
          <CrossIcon />
        </Button>
      </div>
    </form>
  );
};

export default AddToFridgeForm;
