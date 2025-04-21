import React, { useState } from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import Tooltip from '../messages';

export default function TextInput({ label, placeholder, type, value, onChange, message, required = false, icon }) {
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

        {/* Ícone padrão (se existir e não for password) */}
        {icon != null && type !== 'password' && (
          <i className={`fi ${icon} text-input-icon`}></i>
        )}

        {/* Ícone de mostrar/ocultar senha */}
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
