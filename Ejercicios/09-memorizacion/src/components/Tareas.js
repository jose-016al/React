import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(30);

    const guardarTareas = e => {
        e.preventDefault();
        setTareas([...tareas, e.target.descripcion.value]);
        e.target.descripcion.value = '';
    }

    const borrar = id => {
        /* Filtar las tareas para eliminar la que nno quiero */
        let nuevas_tareas = tareas.filter((tarea, index) => index !== id);
        /* Set State, guardar el nuevo listado de tareas en el estado */
        setTareas(nuevas_tareas);
    }

    const sumar = () => {
        setContador(contador + 1);
    }

    const contadoresPasados = (acumulacion) => {
        for (let i = 0; i <= acumulacion; i++) {
            console.log("Ejecutando acumulacion de contadores del pasado...");
        }
        return `Contador manual de tareas: ${ contador }`;
    }

    /* De esta manera la funcion se ejecutara solo al cargar el componente, y cuando haya cambios en el contador */
    /* pero no le afectara el resto de tareas como añador o eliminar una tarea */
    const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

    return (
        <div className='tareas-container'>
            <h1>Mis tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type='text' name='descripcion' placeholder='describe la tarea' />
                <input type='submit' value='Agregar' />
            </form>

            <h3>{ memoContadores }</h3>
            <button onClick={sumar}>Sumar</button>

            <h3>Listado de tareas</h3>
            <ul>
                {
                    tareas.map((tarea, index) => {
                        return (
                            <li key={index}>
                                {tarea}
                                &nbsp;
                                <button onClick={ () => borrar(index) }>X</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
