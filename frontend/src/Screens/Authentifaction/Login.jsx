import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../slices/userSlice';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
