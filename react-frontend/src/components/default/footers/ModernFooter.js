import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo, TextLink } from '../../ComponentsModule';

export default function ModernFooter({ navList, actionList }) {
  const data = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="modern-footer-container">
        <div className="modern-footer-row">
          <Logo width="275px" />
        </div>
        <div className="modern-footer-row">
          {navList.map((navLink, index) => (
            <TextLink key={index} link={navLink.link}>{navLink.label}</TextLink>
          ))}
        </div>
        <div className="modern-footer-row icons">
          {actionList.map((actionNav, index) => (
            <IconButton key={index} action={() => window.open(actionNav.link)} icon="brands-instagram" size="md" type="contained" />
          ))}
        </div>

        <div className="footer-section">
          <small>© {data} Orivaldo Seguros. Todos os Direitos Reservados.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <small>Desenvolvido por </small>
        <a href="http://" target="_blank" rel="noreferrer">Korvus</a>
      </div>


    </div>
  )
}
