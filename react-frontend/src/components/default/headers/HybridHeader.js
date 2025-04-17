import React, { useEffect, useState } from 'react';
import './style.css';
import IconButton from '../buttons/IconButton';
import Menu from '../menus/Menu';

/**
 * Props do Componente
 * @param {string} borderStyle - null (Default), basic, colorful
 * @param {string} navItemStyle - contained, full
 * @param {boolean} showNav - true, false (Default)
 * @param {boolean} showActions - true, false (Default)
 * @param {boolean} showShadow - true, false (Default)
 */
export default function HybridHeader({
  borderStyle = 'colorful',
  showActions = false,
  showShadow = true
}) {
  const [headerShadow, setHeaderShadow] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    showShadow && setHeaderShadow('header-shadow');
  }, []);

  const hybridHeaderClasses = `header hybrid ${borderStyle} ${headerShadow}`;

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className={hybridHeaderClasses}>

      <div className="header-left header-flex menu">
        <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <i class="fi fi-ss-cross"></i> : <i class="fi fi-ss-menu-burger"></i>}
        </button>

        <img src="/assets/logo.png" className="header-logo" alt="Logo do header" />

      </div>

      {showActions && (
        <div className="header-right header-flex">
          <IconButton size="small" type="contained"/>
          <IconButton size="small" type="text" />
          <IconButton size="small" type="outlined" />
        </div>
      )}
      <Menu isOpen={menuOpen} fromHeader={true} type="classic"/>
    </div>
  );
}
