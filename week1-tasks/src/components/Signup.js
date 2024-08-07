import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password ,age})
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup successful');
        navigate('/login');
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='page'>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
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
      <div>
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setage(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" style={{marginBottom:'3px'}}>Signup</button>
      <button type="submit" onClick={()=>{navigate('/login')}}>Already registered</button>
    </form>
  );
};

export default Signup;
