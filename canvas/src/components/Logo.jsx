// components/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <h1>
        <span className="logo-health">Health</span><span className="logo-hub">Hub</span>
      </h1>
    </Link>
  );
};

export default Logo;
