import React, { Component } from 'react';

import HeroSlide from './HeroSlide';

import Logo from '../images/logo-white.png'

import './HeroCarousel.css';

class HeroCarousel extends Component {
  constructor () {
    super();
    this.slides = [
      'hero-carousel-slide-1',
      'hero-carousel-slide-2',
      'hero-carousel-slide-3',
      'hero-carousel-slide-4',
      'hero-carousel-slide-5'
    ]

    this.logoStyles = {
      backgroundImage: `url('${Logo}')`
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="hero-carousel">
            <ul className="slides">
              {
                this.slides
                  .map(src => <HeroSlide key={src} bgImage={src} />)
              }
            </ul>
          </div>
          <div className="logo" style={ this.logoStyles }></div>
        </div>
      </div>
    )
  }
}

export default HeroCarousel;
