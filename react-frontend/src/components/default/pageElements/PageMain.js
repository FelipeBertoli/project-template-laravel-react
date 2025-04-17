import React from 'react';
import './style.css';

export default function PageMain({ children }) {
  return (
    <div className='page-main'>
      {children}
    </div>
  );
}
