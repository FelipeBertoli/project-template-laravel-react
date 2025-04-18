import React from 'react';
import './style.css';

export default function PageContent({children}) {
  return (
    <div className='page-content'>{children}</div>
  )
}
