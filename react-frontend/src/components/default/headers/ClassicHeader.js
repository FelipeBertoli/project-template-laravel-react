import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';

export default function ClassicHeader({
  borderStyle,
  itemAlign = 'spacing',
  navStyle = 'text',
  navBorder = 'radius-sm',
  showNav = true,
  showActions = true,
  showShadow = false,
  navList,
  actionList
}) {
  const [headerShadow, setHeaderShadow] = useState('');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (showShadow) setHeaderShadow('header-shadow');

  }, [showShadow]);

  const headerClasses = `header ${borderStyle} ${
    navStyle === 'contained' || navStyle === 'outlined' || navStyle === 'text'
      ? 'contained-nav'
      : ''
  }`;

  return (
    <div className={headerClasses}>
      <Logo width="250px" />
      <div className={`header-toolbar header-flex ${itemAlign}`}>
        {showNav && (
          <nav className="header-nav header-flex">
            {navList.map((navLink, index) => {
              const sectionId = navLink.link.replace('#', '');
              const isActive = activeSection === sectionId ? 'active' : '';
              return (
                <a
                  key={index}
                  href={navLink.link}
                  className={`header-nav-item ${navStyle} ${navBorder} ${isActive}`}
                >
                  {navLink.label}
                </a>
              );
            })}
          </nav>
        )}
        {showActions && (
          <div className="header-actions header-flex">
            {actionList.map((actionNav, index) => (
              <IconButton key={index} action={() => window.open(actionNav.link)} icon={actionNav.icon} size="sm" type="contained" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
