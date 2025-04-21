import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo, TextLink } from '../../ComponentsModule';

/** Props do Componente
 * @param {string} logoPosition: posição da logo -  bottom, top (default)
 */
export default function ClassicFooter({logoPosition = "top"}) {
  const data = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="classic-footer-container">
        <div className="classic-footer-flex">
          {logoPosition === "top" && <Logo />}
          
          <ul className='classic-footer-column'>
            <li><h6>Título</h6></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
          </ul>
          <ul className='classic-footer-column'>
            <li><h6>Título</h6></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
          </ul>
          <ul className='classic-footer-column'>
            <li><h6>Título</h6></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
          </ul>
          <ul className='classic-footer-column'>
            <li><h6>Contato</h6></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>
            <li><TextLink>Link</TextLink></li>

          </ul>
        </div>
        <div className="footer-section">
        {logoPosition === "bottom" && <Logo /> }
        <div></div>
          <small>© {data} Korvus Soluções Digitais. Todos os Direitos Reservados.</small>
          <div className='classic-footer-row'>
              <IconButton size='md' type="text"/>
              <IconButton size='md' type="text"/>
              <IconButton size='md' type="text"/></div>
        </div>
      </div>
      <div className="footer-bottom">
        <small>Desenvolvido por </small>
        <a href="http://" target="_blank" rel="noreferrer">Korvus</a>
      </div>

    </div>
  )
}
