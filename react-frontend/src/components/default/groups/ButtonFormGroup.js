import React from 'react'

export default function ButtonFormGroup({children, direction="column"}) {
  return (
    <div className={`button-form-group ${direction}`}>{children}</div>
  )
}
