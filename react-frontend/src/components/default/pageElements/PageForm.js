import React from 'react'
import Logo from '../images/Logo'

export default function PageForm({ children, title, direction = 'vertical', align="center", size='reduced', borderRadius="medium-radius", showBorder=true}) {
    return (
        <div className={`page-form ${direction} ${align} ${borderRadius} ${size}`}>
            <div className="page-form-header">
                <Logo light={'/assets/logo-icon.png'} dark={'/assets/logo-icon.png'}/>
                <h4>{title}</h4>
            </div>
            {children}
        </div>
    )
}
