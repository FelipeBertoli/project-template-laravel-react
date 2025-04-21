import React from 'react';
import './style.css';

export default function NavLink({ label = 'Item', link, style = 'text', textFont = "heading", icon = "image", origin, active }) {
    return (
        <a className={`link nav-link ${style} ${active ? 'active' : ''}`} href={link}>
            {icon && <i className={`bx bx-${icon}`}></i>}
            <span className={`${textFont}`}>{label}</span>
            {origin = "menu" && <span className="tooltip">{label}</span>}
        </a>
    )
}
