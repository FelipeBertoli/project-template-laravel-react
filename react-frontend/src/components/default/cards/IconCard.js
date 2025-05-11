import React from 'react';
import './style.css'

export default function IconCard({header, text, icon, key}) {
  console.log(header)
  return (
    <div className='card icon-card' key={key}>
        <i className={`fi fi-ss-${icon}`}></i>
        <h5>{header}</h5>
        <span>{text}</span>
    </div>
  )
}
