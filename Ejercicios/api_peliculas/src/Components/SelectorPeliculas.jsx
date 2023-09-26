import React, { useEffect, useState } from "react";

const Peliucla = ({selectorId, setSelectorId}) => {
    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const apiKey = "8930572ca461d9b58d8f05f72d6f419a";
            const url = "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by-popularity.desc&api_key=" + apiKey;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setPelicula(json.results);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <select value={selectorId} onChange={(e) => setSelectorId(e.target.value)}>
            {pelicula.map((peli, index) => (
                <option key={peli.id} value={index}>
                    {peli.title}
                </option>
            ))}
        </select>  
    );
}

export default Peliucla;