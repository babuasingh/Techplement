// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome</h1>
      <div className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
      </div>
    </div>
  );
};

export default Home;
