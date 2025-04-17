import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import Link from '../texts/Link';

export default function ClassicFooter() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-nav">
          <Link>Item</Link>
          <Link>Item</Link>
          <Link>Item</Link>
        </div>
        <div className="footer-actions">
          <IconButton size='small' color='secondary' type='contained' />
          <IconButton size='small' color='secondary' type='contained' />
          <IconButton size='small' color='secondary' type='contained' />

        </div>
        <div className="footer-bottom">          <img src="/assets/logo.png" className="header-logo" alt="Logo do header" srcset="" />
          <span>Texto</span>
          <span>Texto</span>
        </div>

      </div>

    </div>
  )
}
