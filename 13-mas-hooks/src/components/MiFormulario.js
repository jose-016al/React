import React from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const { formulario, enviado, cambiado } = useForm({});

    return (
        <div>
            <h1>Formulario</h1>
            <p>Formulario para guardar un curso</p>
            <p>Curso guardado: {formulario.titulo}</p>
            <pre className='codigo'>{JSON.stringify(formulario)}</pre>

            <form className='mi-formulario' onSubmit={enviado}>
                <input type='text' name='titulo' onChange={cambiado} placeholder='Titulo:' />
                <input type='number' name='year' onChange={cambiado} placeholder='Año Publicacion' />
                <textarea name='descripcion' onChange={cambiado} placeholder='Año publicacion' />
                <input type='text' name='autor' onChange={cambiado} placeholder='Autor:' />
                <input type='email' name='email' onChange={cambiado} placeholder='Correo de contacto:' />

                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}
