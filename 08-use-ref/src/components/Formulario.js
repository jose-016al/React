import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre = useRef('');
    const apellidos = useRef('');
    const email = useRef('');
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();
        console.log(nombre.current.value);
        console.log(apellidos.current.value);
        console.log(email.current.value);

        /* mi caja */
        let { current: caja } = miCaja;
        caja.classList.add('fondoVerde');
        caja.innerHTML = 'Formulario enviado';
    }

    return (
        <div>
            <h1>Formulario</h1>

            <div ref={miCaja} className='miCaja'>
                <h2>Pruebas con useRef</h2>
            </div>

            <form onSubmit={ mostrar }>
                <input type="text" ref={nombre} placeholder="Nombre" /><br />
                <input type="text" ref={apellidos} placeholder="Apellidos" /><br />
                <input type="email" ref={email} placeholder="Correo electronico" /><br />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
