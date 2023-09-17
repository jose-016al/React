import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

  const [mostrar, setMostrar] = useState(false);

  const caja = useRef();
  const boton = useRef();

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Componente cargado!!!');
  }, []);

  useEffect(() => {
    console.log('useEffect: Componente cargado!!!');
    if (caja.current == null) return

    const {bottom} = boton.current.getBoundingClientRect();
    caja.current.style.top = `${bottom + 45}px`;
    caja.current.style.left = `${bottom + 45}px`;

  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>

      <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar mensaje</button>

      {mostrar && (
        <div className='caja' ref={caja}>Hols, soy un mensaje</div>
      )}
    </div>
  )
}
