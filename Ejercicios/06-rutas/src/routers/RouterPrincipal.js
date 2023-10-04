import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { InicioPanel } from '../components/panel/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Personas } from '../components/Personas';
import { PanelControl } from '../components/PanelControl';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1>Cabecera</h1>
            <hr />

            <nav>
                <ul>
                    <li><NavLink to="/inicio" className={({isActive}) => isActive ? "activado" : ""}>Inicio</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activado" : ""}>Contacto</NavLink></li>
                    <li><NavLink to="/articulos" className={({isActive}) => isActive ? "activado" : ""}>Articulos</NavLink></li>
                    <li><NavLink to="/personas" className={({isActive}) => isActive ? "activado" : ""}>Personas</NavLink></li>
                    <li><NavLink to="/panel" className={({isActive}) => isActive ? "activado" : ""}>Panel de control</NavLink></li>
                </ul>
            </nav>
            <hr />

            <section className='contenido_principal'>
                {/* Cargar componentes */}
                {/* Aqui se carga el componente que coincida con el path */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/personas/:nombre/:apellido" element={<Personas />} />
                    <Route path="/personas/:nombre" element={<Personas />} />
                    <Route path="/personas" element={<Personas />} />
                    <Route path="/redirigir" element={<Navigate to="/personas/Jose/Almiron"/>} />
                    
                    <Route path="/panel/*" element={<PanelControl />}>
                        <Route index element={<InicioPanel />} />
                        <Route path='inicio' element={<InicioPanel />} />
                        <Route path='crear-articulos' element={<Crear />} />
                        <Route path='gestion-usuarios' element={<Gestion />} />
                        <Route path='acerca-de' element={<Acerca />} />
                    </Route>

                    <Route path='*' element={<Error />} />
                </Routes>
            </section>

            <footer>
                <hr />
                <p>Este es el pie de pagina</p>
            </footer>
        </BrowserRouter>
    )
}
