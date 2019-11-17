import React from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage, FridgePage, VridgePage, AccountPage, CommunityPage } from './pages';
import './axiosDefault';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/">
            <Redirect to="/vridge/yours" />
          </Route>
          <Route path="/vridge/:category">
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
