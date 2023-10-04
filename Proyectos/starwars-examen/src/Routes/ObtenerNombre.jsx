import React, { useState, useEffect } from 'react';
import NumRom from './NumRom';

const InformationContainer = (props) => {
    const [datos, setDatos] = useState([]);

    let nombre = props.name;

    if (nombre === "characters") {
        nombre = "people";
    }

    useEffect(() => {
        fetchDatos();
    }, []);
    
    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/${nombre}/${props.id}`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setDatos(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <>
            {nombre === "films" ? (
                <>Episode <NumRom num={datos.episode_id}/>{", " + datos.title}</>
            ) : (
                <>{ datos.name }</>
            )}
        </>
    );
};

export default InformationContainer;
