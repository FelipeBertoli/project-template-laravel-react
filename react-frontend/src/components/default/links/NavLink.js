import React from 'react';
import './style.css';

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
    icon = "image",
    label = 'Item',
    link,
    origin,
    style = 'text',
    textFont = "heading"
  }) {
    return (
        <a className={`link nav-link ${style} ${active ? 'active' : ''}`} href={link}>
            {icon && <i className={`bx bx-${icon}`}></i>}
            <span className={`${textFont}`}>{label}</span>
            {origin = "menu" && <span className="tooltip">{label}</span>}
        </a>
    )
}
