import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import Link from '../texts/Link';
import { Logo } from '../../ComponentsModule';

export default function ClassicFooter() {
  const data = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="classic-footer-container">
        <div className="classic-footer-flex">
          <Logo />
          <ul className='classic-footer-column'>
            <li><h6>Título</h6></li>
            <li><Link>Link</Link></li>
            <li><Link>Link</Link></li>
            <li><Link>Link</Link></li>
          </ul>
          <ul className='classic-footer-column'>
            <li><h6>Título</h6></li>
            <li><Link>Link</Link></li>
            <li><Link>Link</Link></li>
            <li><Link>Link</Link></li>

          </ul>
          <ul className='classic-footer-column'>
            <h6>Título</h6>
            <div className='classic-footer-row'>
              <IconButton size='sm' type='text' />
              <IconButton size='sm' type='text' />
              <IconButton size='sm' type='text' /></div>
          </ul>
        </div>
        <div className="footer-section">
          <small>© {data} Korvus Soluções Digitais. Todos os Direitos Reservados.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <small>Desenvolvido por </small>
        <a href="http://" target="_blank" >Korvus</a>
      </div>

    </div>
  )
}
