import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Login from './Login';
import RandomCat from './RandomCat';
import RandomCatAsComponent from './RandomCatAsComponent';
import RestrictedHOC from './RestrictedHOC';

/**
 * Build an App component that renders the Login component when the user is
 * unauthenticated and the RandomCat component when the user is authenticated.
 */

function App() {
  return (
    <div className="App">
      <header>
        <h2>A simple React app with HOC and REST api call</h2>
      </header>
      <BrowserRouter >
        <Switch>
          <Route exact path="/randomcat" component={RestrictedHOC(RandomCat)} />
          <Route exact path="/randomcat2" component={RandomCatAsComponent} />
          <Route exact path="/login" component={Login} />
          <Redirect from="/" to="/randomcat" />
          <Redirect from="*" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
