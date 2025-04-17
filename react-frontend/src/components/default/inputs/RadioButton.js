import React from 'react';
import "./style.css";

export default function RadioButton({ label, value, onChange }) {
    return (
        <div className="radio-button">
            <input 
                type="radio" 
                value={value} 
                onChange={onChange} 
                id={value} 
                name="radio-group" 
            />
            <label htmlFor={value}>{label}</label>
        </div>
    );
}
