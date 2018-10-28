import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeSection />
        <Footer />
      </div>
    );
  }
}

export default App;
