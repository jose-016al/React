import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente5 = () => {
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
            <Cabecera texto={"Componente 5"} />
            <Descripcion texto={"Crear un componente que traiga desde la api https://jsonplaceholder.typicode.com/users los nombres de los usuarios y sus respectivos emails."} />
            {usuario.map(user => (
                <div key={user.id}>
                    <p>Usuario: {user.name}, email: {user.email}</p>
                </div>
            ))}
        </>
    );
}

export default Componente5;