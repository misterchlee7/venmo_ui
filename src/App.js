import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeSection />
      </div>
    );
  }
}

export default App;
