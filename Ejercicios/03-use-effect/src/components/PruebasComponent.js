import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jose Almiron");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

        // Se ejecuta solo se cambio el usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario: " + contador);
    }, [usuario]);

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>
            <strong className={ contador >= 10 ? 'label label-green' : 'label' }>{ usuario }</strong>
            <p>
                <input type='text' onChange={ modUsuario } placeholder='Cambia el nombre' />
            </p>

            {/* Cuando el usuario sea JOSE se cargara el componente, si se elimina del input se desmontar el componente */}
            { usuario === "JOSE" && <AvisoComponent /> }
        </div>
    )
}
