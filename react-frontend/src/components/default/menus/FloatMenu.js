import React from 'react';
import IconButton from '../buttons/IconButton';

export default function FloatMenu({ fromHeader, isOpen }) {
    return (
        <div className={`float-menu ${isOpen ? 'open' : ''}`}>
            <nav className='float-menu-nav'>
                <IconButton size='lg'/>
                <IconButton size='lg'/>
                <IconButton size='lg'/>

            </nav>
        </div>
    )
}
