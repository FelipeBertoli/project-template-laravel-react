import React from 'react';
import './style.css';

export default function IconButton({ icon='fi fi-ss-picture', onClick, size = 'small', type = 'contained', color = 'primary' }) {
  return (
    <a onClick={onClick} className={`button icon-button ${type} ${color} ${size}`}>
      <i class={icon}/>
    </a>
  );
}
