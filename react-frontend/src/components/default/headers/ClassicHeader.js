import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';

/** Props do Componente
 * @param {string} borderStyle - null (Default), basic, colorful
 * @param {string} navItemStyle - contained (Default), full, outlined
 * @param {boolean} showNav - true, false (Default)
 * @param {boolean} showActions - true, false (Default)
 * @param {boolean} showShadow - true, false (Default)
 */
export default function ClassicHeader({ 
  borderStyle = 'colorful', 
  navItemStyle = 'outlined', 
  showNav = true, 
  showActions = false, 
  showShadow = false}) {

  const [headerShadow, setHeaderShadow] = useState('');

  useEffect(() => {
    showShadow && setHeaderShadow('header-shadow');
  }, []);
  
  const headerClasses = `header ${borderStyle} ${headerShadow} ${navItemStyle === 'contained' || 'outlined' ? 'contained-nav' : ''}`;

  return (
    <div className={headerClasses}>
      <div className="header-left header-flex">
        
        <img src="/assets/logo.png" className="header-logo" alt="Logo do header" srcset="" />
        {showNav &&
          <nav className="header-nav header-flex">
            <a href="#" className={`header-nav-item ${navItemStyle} active`}>Nav Item</a>
            <a href="#" className={`header-nav-item ${navItemStyle}`}>Nav Item</a>
            <a href="#" className={`header-nav-item ${navItemStyle}`}>Nav Item</a>

          </nav>}
      </div>
      {showActions &&
        <div className="header-right header-flex">
          <IconButton size='small' color='secondary' type='contained'/>
          <IconButton size='small' color='secondary' type='outlined'/>
          <IconButton size='small' color='secondary' type='text'/>
        </div>}
    </div>
  )
}
