import React, { useState } from 'react';
import './style.css';

/** Props do Componente
 * @param {string} action: ação passada para o componente
 * @param {string} borderRadius: arredondamento da borda - none, small, medium (default), large, full
 * @param {string} color: cor do componente - primary (default), secondary, main, black, white, error, success, warning
 * @param {string} endIcon: ícone à direita do componente
 * @param {string} label: texto do componente 
 * @param {string} showShadow: define se o componente vai ter sombra - true, false (default) 
 * @param {string} size: tamanho do componente - small, medium, large (default)
 * @param {string} startIcon: ícone à esquerda do componente
 * @param {string} state: estado do componente - enabled (default), disabled 
 * @param {string} variant: variação do componente - contained (default), outlined, text
 * @param {string} width: comprimento do componente - full (default), fit
 */
export default function ActionButton({
  action,
  borderRadius = "medium",
  color = 'primary',
  endIcon = '',
  label = 'Label',
  showShadow = false,
  size = 'large',
  startIcon = '',
  state = 'enabled',
  variant = 'contained',
  width = 'full'
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (typeof action === 'function' && state !== 'disabled') {
      setLoading(true);
      try {
        await action();
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button action-button ${variant} border-${borderRadius} ${size} ${width} ${color} ${showShadow ? 'shadow' : ''} ${state}`}
      disabled={state === 'disabled' || loading}
    >
      <div className={`button-content ${loading ? 'fade-out' : 'fade-in'}`}>
        {startIcon && <i className={`fi fi-${startIcon}`}></i>}
        <span>{label}</span>
        {endIcon && <i className={`fi fi-${endIcon}`}></i>}
      </div>

      <div className={`button-spinner ${loading ? 'fade-in' : 'fade-out'}`}>
        <span className="spinner"></span>
      </div>
    </button>
  );
}
