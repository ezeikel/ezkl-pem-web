import React from 'react';

import './Image.css';

const Image = (props) => {
    const { details, index, addLike } = props;
    return (
      <li className="image">
        <h3>{details.title}</h3>
        <img src={details.url} alt={details.title} />
        <button onClick={() => addLike(index)}>Like</button>
        <h1>{details.likes}</h1>
      </li>
    )
}

export default Image;
