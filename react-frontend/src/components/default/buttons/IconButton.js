import React from 'react';
import './style.css';

/** Props do Componente
 * @param {string} action: ação passada para o componente
 * @param {string} color: cor do componente - primary (default), secondary
 * @param {string} icon: ícone do componente
 * @param {string} label: texto do componente
 * @param {string} size: tamanho do componente - xs, sm (default), md, lg, xl, xxl
 * @param {string} type: tipo do componente - contained (default), outlined, text
 */
export default function IconButton({ action, color = 'primary' , icon='bx bxs-image', size = 'sm', type = 'contained' }) {
  return (
    <button onClick={action} className={`button icon-button ${type} ${color} ${size}`}>
      <i class={`fi fi-${icon}`}/>
    </button>
  );
}
