import React, { useState } from 'react';
import './LS.css';

const LS = () => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {

    setError('');


    if (action === 'Sign Up' && name.trim() === '') {
      setError('Name is required for Sign Up.');
      return;
    }
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (password.trim() === '' || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Simulate API call or further logic
    if (action === 'Sign Up') {
      console.log('User signed up:', { name, email, password });
      alert('Sign Up successful!');
    } else {
      console.log('User logged in:', { email, password });
      alert('Login successful!');
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {action === 'Login' && (
          <div className="forgot-password">
            Lost Password?<span> Click Here!</span>
          </div>
        )}
        {error && <div className="error">{error}</div>}
        <div className="submit-container">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={() => {
              if (action !== 'Sign Up') {
                setAction('Sign Up');
              } else {
                handleSubmit();
              }
            }}
          >
            Sign Up
          </div>
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={() => {
              if (action !== 'Login') {
                setAction('Login');
              } else {
                handleSubmit();
              }
            }}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default LS;


