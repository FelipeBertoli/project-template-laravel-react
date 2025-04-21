import React, { useEffect, useState } from 'react';

export default function Logo({light = '/assets/logo-claro.png', dark = '/assets/logo-escuro.png', width='180px'}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDark(isDarkTheme);
    };

    // Verifica o tema na inicialização
    checkDarkMode();

    // Observa mudanças no tema
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Limpeza do observer quando o componente for desmontado
    return () => observer.disconnect();
  }, []);

  const logoSrc = isDark ? light : dark;

  return (
    <img
      src={logoSrc}
      className="logo header-logo"
      alt="Logo"
      style={{ width: width, height: 'auto' }}
    />
  );
}
