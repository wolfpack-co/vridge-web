import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import GetButton from '../GetButton';
import LeaveButton from '../LeaveButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import useStyles from './useStyles';

let products = [
  {
    img: 'tomato.png',
    name: 'Tomatoes',
    creator: {
      name: 'Milko Mitropolitsky',
      floor: 5,
      apartment: 12,
    },
  },
  {
    img: 'cucumber.jpeg',
    name: 'Cucumber',
    author: 'author',
    creator: {
      name: 'Milko Mitropolitsky',
      floor: 5,
      apartment: 12,
    },
  },
  {
    img: 'eggs.png',
    name: 'Eggs',
    author: 'author',
    creator: {
      name: 'Milko Mitropolitsky',
      floor: 5,
      apartment: 12,
    },
  },
];

const Fridge = () => {
  const [{ data: products, loading, error }] = useAxios('/products');
  console.log(products);
  const [term, setTerm] = useState('');
  const classes = useStyles();

  if (loading || error) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <GridList cellHeight={180} className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', fontSize: '26px' }}>
          <ListSubheader className={classes.header} component="h3">
            <span className={classes.heading}>What's available</span>
            <LeaveButton />
          </ListSubheader>
        </GridListTile>
        <GridListTile key="Search" cols={3} style={{ height: 'auto' }}>
          <TextField
            className={classes.search}
            id="input-with-icon-textfield"
            label="Search"
            onChange={event => setTerm(event.target.value)}
            value={term}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </GridListTile>

        {products
          .filter(product => product.name.toLowerCase().includes(term.toLowerCase()))
          .map(product => {
            const { creator } = product;
            return (
              <GridListTile key={product.id} cols={1}>
                <InsertEmoticonIcon className={classes.avatar} fontSize="large" />
                <img src={product.img || 'tomato.png'} alt={product.name} />
                <GridListTileBar
                  className={classes.title}
                  title={`${product.name} - ${product.quantity}`}
                  subtitle={<span>{creator && `by: ${creator.fullName}`}</span>}
                  actionIcon={<GetButton product={product} />}
                ></GridListTileBar>
              </GridListTile>
            );
          })}
      </GridList>
    </Container>
  );
};

export default Fridge;
