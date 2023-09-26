import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const SelectPokemon = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            const datosConId = json.results.map((pokemon) => ({
                ...pokemon, 
                id: parseInt(pokemon.url.split("/")[6]),
            }));
            setDatos(datosConId);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <>
            <h4 className="p-2">Seleciona un pokemon</h4>
            <ol>
            {datos.map((datos) => (
                <li key={datos.id}>
                    <Link className="text-decoration-none text-dark" to={`/pokemon/${datos.id}`}>
                        { datos.name }
                    </Link>
                </li>
            ))}
            </ol>
        </>
    );
    
}

export default SelectPokemon;