import React from 'react';
import './TopNav.css';

const TopNav = (props) => {
  return (
    <nav className="nav top-nav row">
      <ul className="top-nav__links">
        <li className="link"><a href="">Photos</a></li>
        <li className="link"><a href="">Video</a></li>
        <li className="link"><a href="">About</a></li>
      </ul>
    </nav>
  )
}

export default TopNav;
