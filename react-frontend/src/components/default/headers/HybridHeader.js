import React, { useState } from 'react';
import './style.css';
import IconButton from '../buttons/IconButton';
import Menu from '../menus/Menu';
import { Logo } from '../../ComponentsModule';

export default function HybridHeader({
  headerActionList, /* lista de botões de ação do componente */
  headerBorderStyle = 'basic', /* estilo da borda do header - null, basic, colorful */
  headerItemAlign = 'end', /* tipo de espaçamento dos botões - spacing, center, end */
  showHeaderShadow = true, /* exibir sombra do header - true, false */
  menuType = 'classic',
  menuIsOpen = false,
  ...menuProps
}) {
  const [sidebarOpen, setSidebarOpen] = useState(menuIsOpen);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getMenuIconClass = () => {
    return sidebarOpen ? 'fi fi-rs-cross-small' : 'fi fi-rs-burger-menu';
  };

  const hybridHeaderClasses = `header hybrid ${headerBorderStyle} ${showHeaderShadow ? 'header-shadow' : ''}`;

  return (
    <div className={hybridHeaderClasses}>

      <i className={getMenuIconClass()} id="btn" onClick={toggleSidebar}></i>
      {(menuType === 'float') && <Logo />}
      <div className={`header-toolbar header-flex ${headerItemAlign}`}>

        {headerActionList && (
          <div className="header-actions header-flex">
            {headerActionList.map((actionNav, index) => (
              <IconButton key={index} action={() => window.open(actionNav.link)} icon={actionNav.icon} size="sm" type="contained" />
            ))}
          </div>
        )}
      </div>

      <Menu menuType={menuType} isMenuOpen={sidebarOpen} {...menuProps} />

    </div>
  );
}
