/* eslint-disable react/jsx-no-undef */
import React from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import NoMatch from './Pages/NoMatch';

function App() {
  
  return (
    
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
