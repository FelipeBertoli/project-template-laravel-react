import React from 'react';
import './style.css'

export default function Tooltip({message, size}) {

  return (
    <div className='tooltip-container'>
      <i class="fi fi-ss-cross-circle"></i>
      <span>{message}</span>
    </div>

  )
}
