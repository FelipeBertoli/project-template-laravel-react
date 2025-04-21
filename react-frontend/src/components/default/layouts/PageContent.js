import React from 'react';
import './style.css';

/**
 * Props do Componente
 * @param {React.ReactNode} children: conteúdo do componente
 */
export default function PageContent({children}) {
  return (
    <div className='page-content'>{children}</div>
  )
}
