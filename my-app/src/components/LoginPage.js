import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <div className="email">
        <h2>Username</h2>
        <input className="emailInput"></input>
      </div>
      <div className="password">
        <h2>Password</h2>
        <input className="passInput"></input>
      </div>
      <div className="lButtons">
        <Link to="/register">Register</Link>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default LoginPage;
