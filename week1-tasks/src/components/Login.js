import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        const user = {
          name:data.name,
          email:data.email,
          age:data.age
        }
        navigate('/profile', { state: {user}  });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='page'>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{marginBottom:'3px'}}>Login</button>
      <button type="submit" onClick={() => { navigate('/signup') }}>New User ?</button>
    </form>
  );
};

export default Login;
