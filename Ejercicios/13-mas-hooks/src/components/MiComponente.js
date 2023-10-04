import React, { useId } from 'react'

export const MiComponente = () => {

  const id = useId();

  return (
    <div>
      <h1>Hook useID</h1>
      <p>El id generado es: "{id}"</p>
    </div>
  )
}
