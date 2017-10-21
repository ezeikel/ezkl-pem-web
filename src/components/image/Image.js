import React, { Component } from 'react';

import './Image.css';

class HeroCarousel extends Component {
  render() {
    return (
      <div className="image">
        <span>Title: {this.props.details.title}</span>
        <span>Photographer: {this.props.details.photographer}</span>
        📸
      </div>
    )
  }
}

export default HeroCarousel;
