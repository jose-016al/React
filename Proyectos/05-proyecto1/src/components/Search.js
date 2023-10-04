import React, { useState } from 'react'

export const Search = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = e => {
        // Crear estado y actualizarlo
        setBusqueda(e.target.value);

        // Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.title.toLowerCase().includes(busqueda.toLowerCase());
        });

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        // Actualizr estado del listado principal con lo que logrado filtrar
        setListadoState(pelis_encontradas);

    }

    return (
        <div>
            <div className="search">
                <h3 className="title">Buscador: { busqueda }</h3>
                {(noEncontrado === true && busqueda.length <= 1) && (
                    <span className='no-encontrado'>No se han encontrado ninguna coincidencia</span>
                )}
                <form>
                    <input type="text" id="search_field" name="busqueda" autoComplete='off' onChange={ buscarPeli } />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </div>
    )
}
