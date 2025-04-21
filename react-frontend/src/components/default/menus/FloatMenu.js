import React from 'react';
import IconButton from '../buttons/IconButton';

export default function FloatMenu({ vertical = "center", horizontal = "left", sidebarOpen}) {
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
