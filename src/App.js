import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FridgePage from './pages/FridgePage';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/fridge">
            <FridgePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
