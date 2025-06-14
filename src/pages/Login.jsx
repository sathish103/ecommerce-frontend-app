import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={({ email, password }) => login(email, password)} />
    </div>
  );
};

export default Login;
