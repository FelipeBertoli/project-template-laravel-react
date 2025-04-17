import React from 'react';
import './style.css';

export default function MainButton({ label, onClick, type = 'contained', color = 'primary' }) {
  return (
    <button onClick={onClick} className={`button main-button ${type} ${color}`}>
      {label}
    </button>
  );
}
