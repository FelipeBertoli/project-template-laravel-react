import React from 'react';
import './style.css';

/**
 * Props do Componente
 * @param {React.ReactNode} children: conteúdo do componente
 */
export default function PageMain({ children }) {
  return (
    <div className='page-main'>
      {children}
    </div>
  );
}
