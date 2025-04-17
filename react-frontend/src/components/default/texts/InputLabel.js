import React from 'react';
import './style.css';

export default function InputLabel({label, required}) {
  return (
    <div>
      <label className='input-label'>{label}</label>
      {required && <label className='input-label-required'>*</label>}

    </div>

  )
}
