import React, { useEffect, useState } from 'react';
import './style.css';
import IconButton from '../buttons/IconButton';
import Menu from '../menus/Menu';
import { Logo } from '../../ComponentsModule';

/**
 * Props do Componente
 * @param {string} borderStyle: estilo da borda do header - null (default), basic, colorful
 * @param {string} itemAlign: tipo de espaçamento dos botões - spacing (default), center, end
 * @param {string} menuType: tipo de menu - classic (default), float
 * @param {boolean} showActions: exibir botões de ação - true (default), false
 * @param {boolean} showShadow: exibir sombra do header - true (default), false
 */

export default function HybridHeader({
  borderStyle = 'basic',
  itemAlign = 'end',
  menuType = 'slide',
  showActions = true,
  showShadow = true

}) {
  const [headerShadow, setHeaderShadow] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getMenuIconClass = () => {
    return sidebarOpen ? 'bx bx-x' : 'bx bx-menu';
  };

  useEffect(() => {
    showShadow && setHeaderShadow('header-shadow');
  }, [showShadow]);

  const hybridHeaderClasses = `header hybrid ${borderStyle} ${headerShadow}`;


  return (
    <div className={hybridHeaderClasses}>

      <i className={getMenuIconClass()} id="btn" onClick={toggleSidebar}></i>
      {(menuType === 'float') && <Logo />}
      <div className={`header-toolbar header-flex ${itemAlign}`}>

        {showActions &&
          <div className="header-actions header-flex">
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
          </div>}
      </div>

      <Menu fromHeader={true} type={menuType} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
