import React, { Component } from 'react';

import Header from './components/header/Header';
import TopNav from './components/top-nav/TopNav';
import HeroCarousel from './components/hero-carousel/HeroCarousel';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <TopNav />
        {/* <HeroCarousel /> */}
      </div>
    );
  }
}

export default App;
