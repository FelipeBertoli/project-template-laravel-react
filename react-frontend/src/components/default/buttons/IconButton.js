import React from 'react';
import './style.css';

export default function IconButton({ icon='bx bxs-image', onClick, size = 'small', type = 'contained', color = 'primary' }) {
  return (
    <button onClick={onClick} className={`button icon-button ${type} ${color} ${size}`}>
      <i class={`bx bx-${icon}`}/>
    </button>
  );
}
