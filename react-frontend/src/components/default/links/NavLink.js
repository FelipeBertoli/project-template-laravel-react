import React from 'react';
import './style.css';
import Icon from '../elements/Icon';

/**
 * Props do Componente
 * @param {boolean} active - define se o link está sendo acessado
 * @param {string} icon - nome do ícone da biblioteca Boxicons
 * @param {string} label - texto exibido no link
 * @param {string} link - URL de destino
 * @param {string} origin - origem do componente - menu, header
 * @param {string} style - estilo visual do link - contained, outlined, text (default)
 * @param {string} textFont - classe da fonte do texto - body, heading (default)
 */

export default function NavLink({
    active,
    iconStyle,
    iconImage,
    label = 'Item',
    borderRadius = 'medium',
    link,
    navVariant = 'text',
    textFont = 'heading',
    color = 'black',
    size = 'small'
  }) 

  {
    return (
        <a className={`link nav-link text ${navVariant} ${color} ${active ? 'active' : ''} ${size} border-${borderRadius}`} href={link}>
            {iconImage && <Icon Image={iconImage} style={iconStyle}/>}
            <span className={`${textFont}`}>{label}</span>
            {origin = "menu" && <span className="tooltip">{label}</span>}
        </a>
    )
}
