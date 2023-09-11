import React from 'react'

export const Edit = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const title = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir el target del elemento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const index = pelis_almacenadas.findIndex(pelicula => pelicula.id === id);

        // Crear objeto con ese indice
        let peli_actualizada = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        // Actualizar el elemento con ese indice
        pelis_almacenadas[index] = peli_actualizada;

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        // Actualizar el estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{ title }</h3>
            <form onSubmit={ e => guardarEdicion(e, peli.id) }>
                <input type='text' name='title' defaultValue={ peli.title } className='titulo_editado'/>
                <textarea name='description' defaultValue={ peli.description } className='descripcion_editada' />
                <input type='submit' className='editar' value="Editar" />
            </form>
        </div>
    )
}
