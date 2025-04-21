import React from 'react';
import './style.css';

/**
 * Props do Componente
 * @param {React.ReactNode} children - conteúdo do link
 * @param {string} link - URL de destino
 * @param {string} message - mensagem exibida como tooltip
 */
export default function Link({ children, link, message }) {
  return (
    <a className="link text-link" href={link} title={message}>
      {children}
    </a>
  );
}
