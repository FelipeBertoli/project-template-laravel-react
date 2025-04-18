import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';

/** Props do Componente
 * @param {string} itemAlign - null (Default), center
 * @param {string} borderStyle - null (Default), basic, colorful
 * @param {string} navStyle - contained (Default), full, outlined
 * @param {boolean} showNav - true, false (Default)
 * @param {boolean} showActions - true, false (Default)
 * @param {boolean} showShadow - true, false (Default)
 */
export default function ClassicHeader({
  itemAlign = 'spacing',
  borderStyle = 'basic',
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
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
            <IconButton size='sm' color='secondary' type='contained' />
          </div>}
      </div>

    </div>
  )
}
