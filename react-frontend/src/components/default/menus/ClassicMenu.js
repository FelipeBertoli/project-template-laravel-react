import React from 'react';
import './style.css'

export default function ClassicMenu({ fromHeader, isOpen }) {
    return (
        <div className={`side-menu ${isOpen ? 'open' : ''} ${fromHeader ? 'header-menu' : ''}`}>
            <nav className='menu-nav'>
                <a href="/" className={`menu-nav-item active`}><i class="fi fi-ss-picture"></i> <span className='menu-nav-item-text'>Nav Item</span></a>
                <a href="/" className={`menu-nav-item`}><i class="fi fi-ss-picture"></i> <span className='menu-nav-item-text'>Nav Item</span></a>
                <a href="/" className={`menu-nav-item`}><i class="fi fi-ss-picture"></i> <span className='menu-nav-item-text'>Nav Item</span></a>
            </nav>
        </div>

    )
}
