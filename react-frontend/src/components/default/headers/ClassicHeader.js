import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';

/** Props do Componente
 * @param {string} borderStyle: estilo da borda do header - null (default), basic, colorful
 * @param {string} itemAlign: tipo de espaçamento dos botões - spacing (default), center, end
 * @param {string} navBorder: arredondamento dos botões de navegação - none-radius, small-radius (default), medium-radius, large-radius, round-radius
 * @param {string} navStyle: estilo dos botões de navegação - contained, full, outlined, text (default)
 * @param {boolean} showActions: exibir botões de ação - true (default), false
 * @param {boolean} showNav: exibir botões de navegação true (default), false
 * @param {boolean} showShadow: exibir sombra do header - true (default), false
 */
export default function ClassicHeader({
  borderStyle,
  itemAlign= 'spacing',
  navStyle = 'text',
  navBorder = 'small-radius',
  showNav = true,
  showActions = true,
  showShadow = true }) {

  const [headerShadow, setHeaderShadow] = useState('');

  useEffect(() => {
    showShadow && setHeaderShadow('header-shadow');
  }, [showShadow]);

  const headerClasses = `header ${borderStyle} ${headerShadow} ${navStyle === 'contained' || navStyle === 'outlined' || navStyle === 'text' ? 'contained-nav' : ''}`;


  return (
    <div className={headerClasses}>
      <Logo />
      <div className={`header-toolbar header-flex ${itemAlign}`}>
        {showNav &&
          <nav className="header-nav header-flex">
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder} active`}>Nav Item</a>
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder}`}>Nav Item</a>
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder}`}>Nav Item</a>

          </nav>}
        {showActions &&
          <div className="header-actions header-flex">
            <IconButton size='md' color='secondary' type='contained' />
            <IconButton size='md' color='secondary' type='contained' />
            <IconButton size='md' color='secondary' type='contained' />
          </div>}
      </div>

    </div>
  )
}
