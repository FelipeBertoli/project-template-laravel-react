import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';
import NavLink from '../links/NavLink';

export default function ClassicHeader({
  headerActionList,
  headerBorderStyle,
  headerItemAlign = 'spacing',
  headerNavList,
  headerNavStyle = 'text',
  showHeaderShadow = true,
  ...props
}) {

  const headerClasses = `header ${headerBorderStyle} ${showHeaderShadow ? 'header-shadow' : ''} ${props.navStyle === 'contained' || props.navStyle === 'outlined' || props.navStyle === 'text'
      ? 'contained-nav'
      : ''
    }`;

  return (
    <div className={headerClasses}>
      <Logo width="200px" />
      <div className={`header-toolbar header-flex ${headerItemAlign}`}>
        {headerNavList && (
          <nav className="header-nav header-flex">
            {headerNavList.map((index) => {
              return (
                <NavLink key={index} variant={headerNavStyle} {...props} />
              )
            })}
          </nav>
        )}
        {headerActionList && (
          <div className="header-actions header-flex">
            {headerActionList.map((actionNav, index) => (
              <IconButton key={index} action={() => window.open(actionNav.link)} icon={actionNav.icon} size="sm" type="contained" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
