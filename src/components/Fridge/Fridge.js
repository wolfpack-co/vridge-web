import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import GetButton from '../GetButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    maxWidth: '500px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  search: {
    width: '100%',
    margin: '0 0 20px 0',
  },
  header: {
    fontSize: '26px',
  },
  getIcon: {
    color: 'red',
  },
}));

const products = [
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
  const [{ data, loading, error }] = useAxios('/products');
  const [term, setTerm] = useState('');
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <GridList cellHeight={180} className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', fontSize: '26px' }}>
          <ListSubheader className={classes.header} component="h3">
            Available in the fridge
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
          .map(product => (
            <GridListTile key={product.img} cols={1}>
              <img src={product.img} alt={product.name} />
              <GridListTileBar
                className={classes.title}
                title={product.name}
                subtitle={<span>by: {product.creator.name}</span>}
                actionIcon={<GetButton product={product} />}
              />
            </GridListTile>
          ))}
      </GridList>
    </Container>
  );
};

export default Fridge;
