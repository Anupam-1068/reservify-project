import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      toast({
        title: 'Login Failed',
        description: 'Please enter both email and password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: 'Login Failed',
        description: 'Please enter a valid email address',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Validate password length
    if (password.length < 6) {
      toast({
        title: 'Login Failed',
        description: 'Password must be at least 6 characters long',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
      
    try {
      const response = await axios.post('/api/login', { email, password });
      // Handle successful login
      toast({
        title: 'Login',
        description: 'Logged in successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate('/Allergan.github.io/home');
      }, 1000);
    } catch (error) {
      setError('Invalid email or password'); // Display error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
