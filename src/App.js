import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { FridgePage, VridgePage, AccountPage, CommunityPage } from './pages';
import logo from './logo.svg';
import './axiosDefault';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/vridge">
            <VridgePage />
          </Route>
          <Route path="/fridge">
            <FridgePage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/community">
            <CommunityPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
