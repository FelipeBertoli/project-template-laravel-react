import React, { useEffect, useState } from 'react';
import './style.css'

/**
 * Props do Componente
 * @param {string} darkLogoPath: caminho da logo do tema escuro
 * @param {string} lightLogoPath: caminho da logo do tema claro
 * @param {string} width: tamanho da logo
 */
export default function Logo({darkLogoPath = '/assets/logo-escuro.png', lightLogoPath= '/assets/logo-claro.png', width='180px'}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDark(isDarkTheme);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = isDark ? lightLogoPath : darkLogoPath ;

  return (
    <img
      src={logoSrc}
      className="logo"
      alt="Logo"
      style={{ width: width, height: 'auto' }}
    />
  );
}
