import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Views/Home";
import Saved from "./Views/Saved";
import Search from "./Views/Search";

function App() {
  
  return (
    <div>
        <Router>
                <Header />
                <div>
                <Switch>
       <Route exact path="/">
                <Home />
      </Route>
      <Route path="/search">
                <Search />
      </Route>
      <Route path="/books">
                <Saved />
      </Route>
                </Switch>
                </div>
                <Footer />
      </Router>

     
    </div>
  );
}

export default App;
