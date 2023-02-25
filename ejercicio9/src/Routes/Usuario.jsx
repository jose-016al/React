import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';

const Usuario = () => {

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setUsuario(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <>
        <Nav />
        <ol>
            {usuario.map(user => (
                <li key={user.id}>
                    <Link to={`/Posts/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ol>
        </>
    );
}

export default Usuario;