import React from 'react';
import './style.css';

/**
 * Props do Componente
 * @param {React.ReactNode} children: conteúdo do componente
 */
export default function PageContainer({ children }) {
  return (
    <div className='page-container'>
      {children}
    </div>
  );
}
