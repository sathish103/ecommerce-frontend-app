import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const { register } = useAuth();
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onRegister={({ email, password }) => register(email, password)} />
    </div>
  );
};

export default Register;
