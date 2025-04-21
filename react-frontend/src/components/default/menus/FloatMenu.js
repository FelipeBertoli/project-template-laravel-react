import React from 'react';
import IconButton from '../buttons/IconButton';

/**
 * Props do Componente
 * @param {string} horizontal: posição horizontal do componente na tela - left (default), right
 * @param {boolean} sidebarOpen - condição de exibição do componente passada pelo componente pai (HybridHeader) - false (default), true
 * @param {string} vertical: posição vertical do componente na tela - bottom, center (default), up
 */
export default function FloatMenu({ vertical = "center", sidebarOpen, horizontal = "left", }) {
    return (
        <div className={`float-menu ${sidebarOpen? 'open' : ''} ${vertical} ${horizontal}`}>
            <nav className='float-menu-nav'>
                <IconButton size='lg'/>
                <IconButton size='lg'/>
                <IconButton size='lg'/>
            </nav>
        </div>
    )
}
