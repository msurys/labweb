import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { logInWithGoogle, useUser,logout,logInWithGithub } from "../Firebase/AuthService";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if(login(email, password)) {
      navigate('/');
    }
    else {
      setError('Invalid email or password. Please try again.');
    }
  };

  if(user)
  return(
    <div className="App">
        <h2>You are logged in as {user.displayName}</h2>
        <button onClick={logout}>Log me out</button>
    </div>
  )

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={logInWithGoogle}>Login with Google</button>
      <button onClick={logInWithGithub}>Login with Github</button>
    </div>
    
  );
};

export default Login;
