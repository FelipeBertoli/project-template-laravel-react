import React from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import Tooltip from '../messages/Tooltip';
import IconButton from '../buttons/IconButton';

export default function AddInput({ label, placeholder, type, value, onChange, message, required = false, icon }) {
    return (
        <div className="text-input add-input">
            {label != null && <InputLabel label={label} required={required} />}

            <div className='text-input-box '>
                <input className='text-input-field' placeholder={placeholder} type={type} value={value} onChange={onChange} required={required} />
                <IconButton icon="fi fi-ss-plus" size='xs' color="secondary" />
            </div>
            {message != null && <Tooltip message={message} />}
        </div>
    )
}
