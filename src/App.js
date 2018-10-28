import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={HomeSection} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Fragment>
        </Router>
    );
  }
}

export default App;
