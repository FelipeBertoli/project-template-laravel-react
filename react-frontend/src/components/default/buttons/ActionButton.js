import React from 'react';
import './style.css';

export default function ActionButton({ label, icon, onClick, type = 'contained', color = 'primary' }) {
  return (
    <button onClick={onClick} className={`button action-button ${type} ${color}`}>
      {icon != null && <i class={icon}></i>}
      
      <span>{label}</span>
    </button>
  );
}
