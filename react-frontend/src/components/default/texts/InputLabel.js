import React from 'react';
import './style.css';

export default function InputLabel({label, required, htmlFor}) {
  return (
    <div>
      <label htmlFor={htmlFor} className='input-label'>{label}</label>
      {required && <label className='input-label-required'>*</label>}

    </div>

  )
}
