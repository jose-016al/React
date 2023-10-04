import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, seNombre] = useState('');
    const [pagina, setPagina] = useState(1);

    const asignarGestor = e => {
        seNombre(e.target.value);
    }

    const mostarMensaje = useCallback(() => {
        console.log("Hola que tal soy un mensaje desde el componente Empleados!!");
    }, [pagina]);

    return (
        <div>
            <h1>Nombre del gestor: { nombre }</h1>

            <h2>Listado de empleados</h2>
            <input type='text' onChange={asignarGestor} placeholder='Nombre del gestor' />
            <p>Los usuarios son gestionados por: { nombre } vienen de jsonplaceHolder...</p>
            <button onClick={ () => setPagina(1) }>Pagina 1</button> 
            <button onClick={ () => setPagina(2) }>Pagina 2</button>
            {/* si pagina no cambia el componente solo se renderizara al cargar el componente */}
            <Empleados pagina={pagina} mensaje={mostarMensaje} />
        </div>
    )
}
