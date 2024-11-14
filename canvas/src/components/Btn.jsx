// Btn.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Btn.css';

const Btn = ({ text, type = 'primary', path, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      className={`custom-btn ${type}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Btn;