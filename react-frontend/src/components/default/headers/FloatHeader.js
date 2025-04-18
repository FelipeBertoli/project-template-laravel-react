import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';

/** Props do Componente
 * @param {string} borderStyle - null, basic (Default), colorful
 * @param {string} navItemStyle - contained (Default), full, outlined
 * @param {boolean} showShadow - true, false (Default)
 */
export default function FloatHeader({
  borderStyle = 'basic',
  navItemStyle = 'contained',
  showActions = false,
  showShadow = false }) {

  const [headerShadow, setHeaderShadow] = useState('');

  useEffect(() => {
    showShadow && setHeaderShadow('float-header-shadow');
  }, []);

  const headerClasses = `float-header ${borderStyle} ${headerShadow} ${navItemStyle === 'contained' || 'outlined' ? 'contained-nav' : ''}`;

  return (
    <div className={headerClasses}>


        <img src="/assets/logo.png" className="logo header-logo" alt="Logo do header" srcset="" />

        <nav className="header-nav header-flex">
          <a href="#" className={`header-nav-item ${navItemStyle} active`}>Nav Item</a>
          <a href="#" className={`header-nav-item ${navItemStyle}`}>Nav Item</a>
          <a href="#" className={`header-nav-item ${navItemStyle}`}>Nav Item</a>

        </nav>

      {showActions &&
        <div className="header-right header-flex">
          <IconButton size='sm' color='secondary' type='contained' />
          <IconButton size='sm' color='secondary' type='contained' />
          <IconButton size='sm' color='secondary' type='contained' />
        </div>}
    </div>
  )
}
