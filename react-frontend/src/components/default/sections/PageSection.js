import React from 'react';
import './style.css'

export default function PageSection({ children, id, title, text, backgroundColor, backgroundImage }) {
    return (
        <section id={id} className={`page-section ${backgroundColor} ${backgroundImage}`}>
            <div className='section-heading'>
                <div className="line-header">
                    <h2>{title}</h2>
                </div>
                <p>{text}</p>
            </div>
            {children}
        </section>
    )
}
