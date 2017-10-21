import React, { Component } from 'react';

import './Image.css';

class HeroCarousel extends Component {
  render() {
    const details = this.props.details;
    return (
      <li className="image">
        <h3>{details.title}</h3>
        <img src={details.url} alt={details.title} />
        <span>Taken by: {details.photographer}</span>
      </li>
    )
  }
}

export default HeroCarousel;
