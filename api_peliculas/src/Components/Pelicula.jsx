import React, { useEffect, useState } from "react";

const Peliucla = () => {
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
            console.log(json.results);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    
    return (
      <select>
        {pelicula.map(peli => (
                <option key={peli.id}>
                    {peli.original_title}
                </option>
            ))}
      </select>  
    );
}

export default Peliucla;