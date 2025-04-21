import React from 'react';
import './style.css';

export default function Link({label, link, message, children}) {
  return (
    <a className={`link text-link`} href={link} text={message}>{children}</a>
  )
}
