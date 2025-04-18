import React from 'react';
import './style.css';

export default function IconButton({ icon='fi fi-ss-picture', onClick, size = 'small', borderRadius="medium-radius", type = 'contained', color = 'primary' }) {
  return (
    <button onClick={onClick} className={`button icon-button ${type} ${color} ${size} ${borderRadius}`}>
      <i class={icon}/>
    </button>
  );
}
