import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // Cuando el componente se monta
        alert("El componente AvisoComponent esta montado");

        // Cuando el componente se desmonta
        return () => {
            alert("COMPONENTE DESMONTADO");
        }
    }, []); // Se ejecuta una vez porque le paso el array vacio

    return (
        <div>
            <hr />
            <h3>Saludos Jose ¿Que tal estas?</h3>
            <button onClick={e => {
                alert("Bienvenido");
            }}>Mostar alerta</button>

        </div>
    )
}
