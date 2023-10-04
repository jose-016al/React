import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);

  const login = e => {
    e.preventDefault();

    let user = {
      id: new Date().getTime(),
      nombre: e.target.nombre.value,
      apellidos: e.target.apellidos.value,
      correo: e.target.correo.value
    };

    setUsuario(user);
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de login</p>

      <form className='login' onSubmit={login}>
        <input type='text' name='nombre' placeholder='nombre' />
        <input type='text' name='apellidos' placeholder='apellidos' />
        <input type='email' name='correo' placeholder='correo' />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  )
}
