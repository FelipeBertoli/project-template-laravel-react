import React from 'react';
import './style.css';

/** Props do Componente
 * @param {string} action: ação passada para o componente
 * @param {string} color: cor do componente - primary (default), secondary
 * @param {string} icon: ícone do componente
 * @param {string} label: texto do componente
 */
export default function ActionButton({action, color = 'primary', icon, label, type = 'contained',  }) {
  return (
    <button onClick={action} className={`button action-button ${type} ${color}`}>
      {icon != null && <i class={icon}></i>}
      
      <span>{label}</span>
    </button>
  );
}
