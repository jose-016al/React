import React from 'react';
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
    

    const { estado, mayusculas, minusculas, add } = useMayus("Jose Almiron");

    return (
        <div>
            <h1>Probando componentes personalizados</h1>
            <h2>{estado}</h2>
            &nbsp;
            <button onClick={mayusculas}>Mayusculas</button>
            &nbsp;
            <button onClick={minusculas}>Minusculas</button>
            &nbsp;
            <button onClick={e => add(" - Probando hooks personalizados")}>Añadir</button>
        </div>
    )
}
