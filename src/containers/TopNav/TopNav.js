import React from 'react';
import { NavLink } from 'react-router-dom';

import './TopNav.css';

const TopNav = () => (
    <nav className="nav top-nav row">
      <ul className="top-nav__links">
        <li className="link"><NavLink to="/" exact>Photos</NavLink></li>
        <li className="link"><NavLink to="/videos" exact>Videos</NavLink></li>
      </ul>
    </nav>
)

export default TopNav;
