import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component


function NavBar() {
  return (
    <nav className="navbar"> {/* Apply the CSS class here */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar;