/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                id: 1,
                email: "jose@reqres.in",
                first_name: "Jose",
                last_name: "Almiron"
            },
            {
                id: 2,
                email: "alberto@reqres.in",
                first_name: "Alberto",
                last_name: "Lopez"
            },
            {
                id: 3,
                email: "pepe@reqres.in",
                first_name: "Pepe",
                last_name: "Martinez"
            },
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                    console.log(usuarios);
                },
                error => {
                    console.log(error);
                }
            );
    }

    const getUsuariosAjazAW = () => {
        setTimeout(async() => {
            try {
                const peticion = await fetch("https://reffdsaqres.in/api/users345?page=1");
                const {data} = await peticion.json();
        
                setUsuarios(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }
        }, 2000);
    }


    useEffect(() => {
        // getUsuariosEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjazAW();
    }, []); // Para evitar que se ejecute siempre que haya un cambio en el componente, le añadimos un array vacio


    if (error !== "") {
            // Cuando algun error
        return (
            <div className='errores'>{ error }</div>
        )
    } else if (loading === true) {
            // Cuando esta todo cargando
        return (
            <div className='cargando'>Cargando datos...</div>
        )
    } else if (loading === false && error === "") {
            // Cuando todo va bine
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (
                                <li key={usuario.id}>
                                    <img src={ usuario.avatar } width="20" />
                                    &nbsp;
                                    {`${usuario.first_name} ${usuario.last_name}`}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        )
    }

}
