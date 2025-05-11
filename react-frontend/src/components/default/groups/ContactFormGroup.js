import React from 'react';
import './style.css'

export default function ContactFormGroup({children, ref}) {
  return (
    <form ref={ref} className='contact-form-group'>{children}</form>
  )
}
