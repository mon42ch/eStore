import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Signin.css"


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (username && email && password && confirmPassword) {
      alert(`Signup successful!\nUsername: ${username}\nEmail: ${email}`);
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div id="signin"> 
      <div id="borders">
      <h2>Sign Up</h2>
      <div>
        <label className="labels">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="labels">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="labels">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="labels">Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleSignUp}>Sign Up</button>
      <Link to="/signin" id='links'>Already have an account? Sign in.</Link>
      </div>
    </div>
  );
};

export default SignUp;
