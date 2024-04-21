import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    // Retrieve username from localStorage
    const username = localStorage.getItem('username');

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
        {/* Conditionally render buttons based on whether username exists in localStorage */}
        {username ? (
          // If username exists, user is logged in
          <>
          <Link to="/logout" className="navbar-button">Logout</Link>
          <Link to="/profile" className="navbar-button">Profile Management</Link>
          </>
        ) : (
          // If username doesn't exist, user is not logged in
          <>
            <Link to="/register" className="navbar-button">Register</Link>
            <Link to="/signin" className="navbar-button">Sign In</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;