import React, { Component } from 'react';

import './Image.css';

class HeroCarousel extends Component {
  render() {
    const { details, index, addLike } = this.props;
    return (
      <li className="image">
        <h3>{details.title}</h3>
        <img src={details.url} alt={details.title} />
        <span>Taken by: {details.photographer}</span>
        <button onClick={(e) => addLike(index)}>Like</button>
        <h1>{details.likes}</h1>
      </li>
    )
  }
}

export default HeroCarousel;
