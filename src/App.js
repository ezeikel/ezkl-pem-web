import React, { Component } from 'react';

import Header from './components/header/Header';
import HeroCarousel from './components/hero-carousel/HeroCarousel';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <HeroCarousel />
      </div>
    );
  }
}

export default App;
