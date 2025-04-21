import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';

/** Props do Componente
 * @param {string} borderStyle: estilo da borda do header - null (default), basic, colorful
 * @param {string} headerBorder: arredondamento das bordas do header - navBorder - none-radius, small-radius (default), medium-radius, large-radius, round-radius
 * @param {string} headerSize: width do tamanho do header - default (default), large
 * @param {string} navBorder: arredondamento dos botões de navegação - none-radius, small-radius (default), medium-radius, large-radius, round-radius
 * @param {string} navStyle: estilo dos botões de navegação - contained, full, outlined, text (default)
 * @param {boolean} showActions: exibir botões de ação - true (default), false
 * @param {boolean} showShadow: exibir sombra do header - true (default), false
 */
export default function FloatHeader({
  borderStyle = 'null',
  headerBorder = 'round-radius',
  headerSize = 'default',
  itemAlign= 'center',
  navBorder = 'medium-radius',
  navStyle = 'contained',
  showActions = true,
  showShadow = false }) {

  const [headerShadow, setHeaderShadow] = useState('');

  useEffect(() => {
    showShadow && setHeaderShadow('float-shadow');
  }, [showShadow]);

  const headerClasses = `float ${headerSize} ${headerBorder} ${borderStyle} ${headerShadow} ${navStyle === 'contained' || 'outlined' ? 'contained-nav' : ''}`;

  return (
    <div className={headerClasses}>
        <img src="/assets/logo.png" className="logo header-logo" alt="Logo do header" srcset="" />

      <div className={`header-toolbar header-flex ${itemAlign}`}>

          <nav className="header-nav header-flex">
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder} active`}>Nav Item</a>
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder}`}>Nav Item</a>
            <a href="http://" className={`header-nav-item ${navStyle} ${navBorder}`}>Nav Item</a>

          </nav>
        {showActions &&
          <div className="header-actions header-flex">
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
          </div>}
      </div>

    </div>
  )
}
