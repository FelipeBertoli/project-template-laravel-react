import React, { useState } from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import Tooltip from '../messages/Tooltip';

/**
 * Props do Componente
 * @param {string} icon: ícone do componente
 * @param {string} label: rótulo do componente
 * @param {string} message: mensagem de ajuda, erro ou aviso
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {string} placeholder: texto de sugestão no campo de input
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} type: tipo do componente - e-mail, password, text (default)
 * @param {string} value: valor do componente
 */

export default function TextInput({ icon, label, message, onChange, placeholder, required = false, type='text', value }) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="text-input">
      {label != null && <InputLabel label={label} required={required} />}

      <div className='text-input-box'>
        <input
          className='text-input-field'
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
        />

        {icon != null && type !== 'password' && (
          <i className={`fi ${icon} text-input-icon`}></i>
        )}

        {type === 'password' && (
          <i
            className={`fi ${showPassword ? 'fi-ss-eye-crossed' : 'fi-ss-eye'} text-input-icon`}
            onClick={() => setShowPassword(prev => !prev)}
            style={{ cursor: 'pointer' }}
          ></i>
        )}
      </div>

      {message != null && <Tooltip message={message} />}
    </div>
  );
}
