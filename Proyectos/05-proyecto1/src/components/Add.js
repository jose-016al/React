import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const Add = ({ setListadoState }) => {

    const titleComponent = "Añadir pelicula";

    const [peliState, setPeliState] = useState({title: "", description: ""});

    const {title, description} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();
        
        // Conseguir datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(), // Nos genera una clave unica para el id
            title,
            description
        };

        // Guardar estado
        setPeliState(peli);

        // Actualizar el estado del listado principal, para que se mueste la pelicula añadida sin tener que recargar la pagina
        setListadoState(elementos => {
            return [...elementos, peli];
        });

        // Guardar en el almacenamiento local
        guardarEnStorage("pelis", peli);
    }

    return (
        <div>
            <div className="add">
                <h3 className="title">{ titleComponent }</h3>

                <strong>
                    {(title && description) && "Has creado la pelicula: " + title}
                </strong>

                <form onSubmit={ conseguirDatosForm }>
                    <input type="text" id="title" name='title' placeholder="Titulo" />
                    <textarea id="description" name='description' placeholder="Descripción"></textarea>
                    <input type="submit" id="save" name='save' value="Guardar" />
                </form>
            </div>
        </div>
    )
}
