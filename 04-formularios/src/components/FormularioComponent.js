import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();

        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellidos: datos.apellidos.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        }
        setUsuario(usuario);
    }

        // De esta forma podemos hacer que al modificar un campo del formulario su estado se actualice automaticamanete
    const cambiarDatos = e => {
        let name_del_input = e.target.name;

        setUsuario(estado_previo => {
            return {
                ...estado_previo, 
                [name_del_input]: e.target.value 
            }
        });
    }

    return (
        <div>
            <h1>Formularios en Reac</h1>

            { usuario.bio && usuario.bio.length >= 1 && (
                <div className='info_usuario label label-gray'>
                    { usuario.nombre } { usuario.apellidos } es un { usuario.genero } y su biografia es esta: <p>{ usuario.bio }</p>
                </div>
            )}

            <form onSubmit={ conseguirDatosFormulario }>
                <input type='text' placeholder='Nombre' name='nombre' onChange={ cambiarDatos } />
                <input type='text' placeholder='Apellidos' name='apellidos' onChange={ cambiarDatos } />
                <select name='genero' onChange={ cambiarDatos }>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder='biografia' name='bio' onChange={ cambiarDatos }></textarea>

                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}
