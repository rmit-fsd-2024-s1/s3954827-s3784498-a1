import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/SpecialDeals">Special Deals</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/register" className="navbar-button">Register</Link>
        <Link to="/signin" className="navbar-button">Sign In</Link>
      </div>
    </nav>
  );
}

export default NavBar;