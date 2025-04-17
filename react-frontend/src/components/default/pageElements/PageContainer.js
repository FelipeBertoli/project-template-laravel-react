import React from 'react';
import './style.css';

export default function PageContainer({ children }) {
  return (
    <div className='page-container'>
      {children} {/* Exibe qualquer conteúdo que for passado para o componente */}
    </div>
  );
}
