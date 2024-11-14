// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Btn from './Btn';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to="/">
          <h1>Health<span>Hub</span></h1>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/appointment" className="nav-link">Appointment</Link>
        <button onClick={scrollToAbout} className="nav-link about-btn">About Us</button>
      </div>

      <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
        <Btn text="Login" type="secondary" path="/Login" />
        <Btn text="Sign Up" type="primary" path="/Login" />
      </div>
    </nav>
  );
};

export default Nav;