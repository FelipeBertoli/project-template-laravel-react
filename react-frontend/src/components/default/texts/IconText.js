import React from 'react';
import './style.css';

export default function IconText({icon, normalText, boldText}) {
  return (
    <div className='icon-text'>
        <i className={`fi fi-${icon}`}/>
        <span>{normalText} <b>{boldText}</b>
        </span>

    </div>
  )
}
