import React, { useState } from 'react'

export const MiPrimerEstado = () => {

                                // Asingmaos un valor por defecto
    const [nombre, setNombre] = useState("Jose Almiron");

        // Desde la funcion llamamos a setNombre que nos permite actualziar el estado del componente
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className='label'>{nombre}</strong>
            &nbsp; {/* Añade una pequeña separacion */}
            <button onClick={ e => cambiarNombre(e, "Fran") }>Cambiar nombre a Fran</button>
            &nbsp; {/* Añade una pequeña separacion */}
            <input type='text' onKeyUp={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre' />
        </div>
    )
}
