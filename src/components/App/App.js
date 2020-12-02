import "./App.scss";

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../Nav';
import Footer from '../Footer';
import Banner from '../Banner';
import AboutUs from '../AboutUs';

function App() {
  return (
    <div className="app">
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Banner} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;