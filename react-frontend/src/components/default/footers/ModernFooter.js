import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo, TextLink } from '../../ComponentsModule';

export default function ModernFooter() {
  const data = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="modern-footer-container">
      <div className="modern-footer-row">
          <Logo/>
        </div>
        <div className="modern-footer-row">
          <TextLink>Link</TextLink>
          <TextLink>Link</TextLink>
          <TextLink>Link</TextLink>
          <TextLink>Link</TextLink>
        </div>
        <div className="modern-footer-row icons">
          <IconButton size='md' color='secondary' type='contained' />
          <IconButton size='md' color='secondary' type='contained' />
          <IconButton size='md' color='secondary' type='contained' />
        </div>

        <div className="footer-section">
          <small>© {data} Korvus Soluções Digitais. Todos os Direitos Reservados.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <small>Desenvolvido por </small>
        <a href="http://" target="_blank" rel="noreferrer">Korvus</a>
      </div>
    </div>
  )
}
