import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="loginForm">
      <h1>Register</h1>
      <div className="email">
        <h2>Username</h2>
        <input className="emailInput"></input>
      </div>
      <div className="password">
        <h2>Password</h2>
        <input className="passInput"></input>
      </div>
      <div className="rButtons">
        {/* Link to the login page */}
        <Link to="/">Login</Link>
        <button onClick={regSubmit}>Submit</button>
      </div>
    </div>
  );
}

function regSubmit() {
  window.alert("Registration Success");
}

export default RegisterPage;