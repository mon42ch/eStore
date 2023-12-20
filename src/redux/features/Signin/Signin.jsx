import React, { useState } from 'react';

import "./Signin.css"
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    
    if (email && password) {
      alert(`Signin successful!\nEmail: ${email}\nPassword: ${password}`);
    } else {
      setError('Please enter valid email and password');
    }
  };

  return (
    <div id="signin">
      <div id='borders'>
      <h2>Sign In</h2>
      <div className="labels">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="labels">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleSignIn} >Sign In</button>
      <div><Link to="/signup">Don't have an account? Sign up.</Link></div>
      </div>
    </div>
  );
};

export default Signin;


