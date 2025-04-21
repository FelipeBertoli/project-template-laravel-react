import React from 'react';
import "./style.css";

/**
 * Props do Componente
 * @param {string} label: rótulo do componente
 * @param {string} message: mensagem de ajuda, erro ou aviso
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} value: valor do componente
 */
export default function RadioButton({ label, onChange, message, required, value}) {
    return (
        <div className="radio-button">
            <input 
                type="radio" 
                value={value} 
                onChange={onChange} 
                id={value} 
                name="radio-group" 
                required={required}
            />
            <label htmlFor={value}>{label}</label>
        </div>
    );
}
