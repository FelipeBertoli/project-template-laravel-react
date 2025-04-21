import React from 'react';
import './style.css';


/** Props do Componente
 * @param {string} action: ação passada para o componente
 * @param {string} color: cor do componente - primary (default), secondary
 * @param {string} label: texto do componente 
 * @param {string} type: tipo do componente - contained (default), outlined, text
 */
export default function MainButton({ color = 'primary', label, action, type = 'contained',  }) {
  return (
    <button onClick={action} className={`button main-button ${type} ${color}`}>
      {label}
    </button>
  );
}
