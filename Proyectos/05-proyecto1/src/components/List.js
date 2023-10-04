import React, { useEffect, useState } from 'react'
import { Edit } from "./Edit";

export const List = ({ listadoState, setListadoState }) => {

    // const [listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        setListadoState(peliculas);
        return peliculas;
    }

    const borrarPeli = id => {
        // Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        // Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_listado_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        // Actualizar estado del listado
        setListadoState(nuevo_listado_peliculas);

        // Actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_listado_peliculas));
    }

    return (
        <>
            {listadoState !== null ? 
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{ peli.title }</h3>
                            <p className="description">{ peli.description }</p>

                            <button className="edit" onClick={() => {
                                setEditar(peli.id);
                            }}>Editar</button>
                            <button onClick={() => borrarPeli(peli.id)} className="delete">Borrar</button>

                            {/* Aparece formmulario de editar */}
                            {editar === peli.id && (
                                <Edit peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>
                            )}
                        </article>
                    );
                })
            : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
