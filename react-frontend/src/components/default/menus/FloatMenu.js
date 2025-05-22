import React from 'react';
import IconButton from '../buttons/IconButton';

export default function FloatMenu({
    horizontalAlign = "left" /* posição horizontal do componente na tela - left (default), right*/,
    isMenuOpen, /*condição de exibição do componente passada pelo componente pai - true, false*/
    verticalAlign = "center" /*posição vertical do componente na tela - bottom, center (default), up*/
}) {

    return (
        <div className={`float-menu ${isMenuOpen ? 'open' : ''} ${verticalAlign} ${horizontalAlign}`}>
            <nav className='float-menu-nav'>
                <IconButton size='lg' />
                <IconButton size='lg' />
                <IconButton size='lg' />
            </nav>
        </div>
    )
}
