import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Acerca } from '../components/Acerca';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (
        <BrowserRouter>
            <header className='header'>
                <nav>
                    <div className='logo'>
                        <h2>Aprendiendo React Context</h2>
                    </div>
                    <ul>
                        <li><NavLink to="/inicio">Inicio</NavLink></li>
                        <li><NavLink to="/articulos">Articulos</NavLink></li>
                        <li><NavLink to="/acerca-de">Acerca de</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                        {usuario.hasOwnProperty("nombre") && usuario.nombre !== null ? (
                            <>
                                <li>
                                    <NavLink to="/">{usuario.nombre}</NavLink>
                                </li>
                                <li>
                                    <a href='#/' onClick={e => {
                                        e.preventDefault();
                                        setUsuario({});
                                    }}>Cerrar sesion</a>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

            <section className='content'>
                {/* Cargar componentes */}
                {/* Aqui se carga el componente que coincida con el path */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/acerca-de" element={<Acerca />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
