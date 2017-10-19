import React, { Component } from 'react';

import SlideOne from '../../images/hero-carousel-slide-1.jpg';
import SlideTwo from '../../images/hero-carousel-slide-2.jpg';
import SlideThree from '../../images/hero-carousel-slide-3.jpg';
import SlideFour from '../../images/hero-carousel-slide-4.jpg';
import SlideFive from '../../images/hero-carousel-slide-5.jpg';

import './HeroSlide.css';

class HeroSlide extends Component {
  constructor(props) {
    super(props);
    let slideSrc;
    switch(props.bgImage) {
      case 'hero-carousel-slide-1':
        slideSrc = SlideOne;
        break;
      case 'hero-carousel-slide-2':
        slideSrc = SlideTwo;
        break;
      case 'hero-carousel-slide-3':
        slideSrc = SlideThree;
        break;
      case 'hero-carousel-slide-4':
        slideSrc = SlideFour;
        break;
      case 'hero-carousel-slide-5':
        slideSrc = SlideFive;
        break;
      default:
        slideSrc = SlideOne;
    }

    this.slideStyle = {
      backgroundImage: `url('${slideSrc}')`
    }
  }
  render() {
    return (
      <li className="slide" style={ this.slideStyle }></li>
    )
  }
}

export default HeroSlide;
