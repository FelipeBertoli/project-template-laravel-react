import React from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import RadioButton from '../inputs/RadioButton';

export default function RadioGroup({ label, options, onChange, required }) {
    return (
        <div className="radio-group">
             {label != null && <InputLabel label={label} required={required} />}
            <div className='radio-buttons-container'>
                {options.map((option, index) => (
                    <RadioButton
                        key={index} 
                        onChange={onChange} 
                        value={option.value} 
                        label={option.label} 
                    />
                ))}
            </div>
        </div>
    );
}
