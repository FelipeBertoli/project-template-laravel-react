import React from 'react';
import './style.css'
import Icon from '../elements/Icon';

export default function IconCard({header, text, iconImage, iconStyle, key}) {
  console.log(header)
  return (
    <div className='card icon-card' key={key}>
        <Icon image={iconImage} style={iconStyle}/>
        <h5>{header}</h5>
        <span>{text}</span>
    </div>
  )
}
