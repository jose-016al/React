import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export const Personas = () => {

    // Valores por defecto en parametros opcionales
    // let { nombre = '"usuario"', apellido='"apellido"' } = useParams();

    const { nombre, apellido } = useParams();
    const navegar = useNavigate();

    const enviar = e => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/personas/${nombre}/${apellido}`;

        if (nombre.length <= 0 && apellido.length <= 0) {
            navegar("/inicio");
        } else if (nombre === "contacto") {
            navegar("/contacto");
        } else {
            navegar(url);
        }
        
    }

    return (
        <div>
            {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
            {nombre && <h1>Pagina de Personas: {nombre} {apellido}</h1>}

            <p>Esta es la pagina de personas</p>

            <form onSubmit={ enviar }>
                <input type="text" name="nombre" />
                <input type="text" name="apellido" />
                <input type="submit" name="enviar" value="Enviar" />
            </form>
        </div>
    )
}
