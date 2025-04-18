import React, { useEffect, useState } from 'react';
import './style.css';
import IconButton from '../buttons/IconButton';
import Menu from '../menus/Menu';
import { Logo } from '../../ComponentsModule';

/**
 * Props do Componente
 * @param {string} borderStyle - null (Default), basic, colorful
 * @param {boolean} showActions - true, false (Default)
 * @param {boolean} showShadow - true, false (Default)
 */
export default function HybridHeader({
  itemAlign = 'end',
  borderStyle = 'basic',
  showActions = false,
  showShadow = true
}) {
  const [headerShadow, setHeaderShadow] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    showShadow && setHeaderShadow('header-shadow');
  }, [showShadow]);

  const hybridHeaderClasses = `header hybrid ${borderStyle} ${headerShadow}`;

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className={hybridHeaderClasses}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <i class="fi fi-ss-cross"></i> : <i class="fi fi-ss-menu-burger"></i>}
      </button>
      <Logo />
      <div className={`header-toolbar header-flex ${itemAlign}`}>

        {showActions &&
          <div className="header-actions header-flex">
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
          </div>}
      </div>

      <Menu isOpen={menuOpen} fromHeader={true} type="float" />
    </div>
  );
}
