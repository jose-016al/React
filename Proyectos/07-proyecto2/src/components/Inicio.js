import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Jose Almirón</strong> y soy Desarrollador Web en Granada,
        y ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en
        todo tipo de proyectos web.
      </h1>

      <div className='title'>
        <h2>
          Te ayudo a crear tu sitio o aplicación web, tener más 
          visibilidad y relevancia en internet. 
        </h2>
        <Link to="/contacto">Contacta conmigo.</Link>
      </div>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  )
}
