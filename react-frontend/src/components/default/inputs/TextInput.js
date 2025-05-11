import React, { useState } from 'react';
import "./style.css";
import Tooltip from '../messages/Tooltip';

/**
 * Props do Componente
 * @param {string} trailIcon: ícone do componente
 * @param {string} leadIcon: ícone à esquerda do input
 * @param {string} label: rótulo do componente
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {string} placeholder: texto de sugestão no campo de input
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} type: tipo do componente - e-mail, password, text (default)
 * @param {string} value: valor do componente
 * @param {string} style: 'filled' ou 'outlined'
 */

export default function TextInput({
  label = "Label",
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  style = 'outlined',
  trailIcon = null,
  leadIcon = null,
  errorText,
  helperText
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`text-input ${style} ${leadIcon ? 'with-lead-icon' : ''}`}>
      {leadIcon && <i className={`fi ${leadIcon} input-icon lead-icon`}></i>}

      <input
        type={inputType}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
      />

      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>

      {type === 'password' && (
        <i
          className={`fi ${showPassword ? 'fi-ss-eye-crossed' : 'fi-ss-eye'} input-icon trail-icon`}
          onClick={() => setShowPassword(prev => !prev)}
        ></i>
      )}

      {trailIcon && type !== 'password' && (
        <i className={`fi ${trailIcon} input-icon trail-icon`}></i>
      )}
      {errorText != null && <Tooltip message={errorText} />}
      {helperText != null && <small className='helper-text'>{helperText}</small>}


    </div>
  );
}
