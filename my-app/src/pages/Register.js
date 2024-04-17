import React from 'react';
import './Register.css'; // Import CSS file for styling
import placeholderImage from '../components/images/placeholder.png';
import graphicSVG from '../components/images/graphicSVG.svg'; // Import your SVG file

function Register() {
  return (
    <div className="register-container">
      <div className="left-section">
        <br/>
        <h2 className='slogan'>Nature's goodness, delivered to your doorstep.</h2>
        <br/><br/><br/>
        <div className="left-bottom-section">
        <img src={graphicSVG} alt="Graphic" className="graphic-image" />
      </div>
      </div>
   
      <div className="right-section">
        {/* Registration form goes here */}
        <h1 className='slogan-2'>Register with us!</h1>
        <form className="registration-form">
          {/* Input fields */}
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
