// src/components/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, like sending the username and password to the server
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="username" 
                      value={username} 
                      onChange={handleUsernameChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      value={password} 
                      onChange={handlePasswordChange} 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
              <div className="card-footer">
                <Link to="/signup">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Login;
