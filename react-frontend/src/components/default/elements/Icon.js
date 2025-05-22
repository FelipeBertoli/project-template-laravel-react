import React, { useEffect, useState } from 'react';

export default function Icon({ image = 'picture', style = 'regular' }) {
  const [formattedStyle, setFormattedStyle] = useState('');

  useEffect(() => {
    switch (style) {
      case 'solid':
        setFormattedStyle('ss');
        break;
      case 'brands':
        setFormattedStyle('brands');
        break;
      case 'regular':
        setFormattedStyle('rs'); 
        break;
      default:
        setFormattedStyle('rs'); 
        break;
    }
  }, [style]);

  return <i className={`fi fi-${formattedStyle}-${image}`} />;
}
