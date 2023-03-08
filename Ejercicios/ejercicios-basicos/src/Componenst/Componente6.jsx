import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente6 = () => {
    const ciudades = ["Madrid", "New York", "Tokyo", "London", "Italy"];
    const [temperatura, setTemperatura] = useState({});

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const apiKey = "4203f61e5436f3dbe7f52f38e9d8f25a";
            
            const urls = ciudades.map(
                ciudad => "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&units=metric&appid="+apiKey
            );
            const respuestas = await Promise.all(urls.map(url => fetch(url)));
            const jsons = await Promise.all(respuestas.map(respuesta => respuesta.json()));
            const nuevoEstado = {};
            jsons.forEach((json, i) => {
                nuevoEstado[ciudades[i]] = json;
            });
            setTemperatura(nuevoEstado);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <>
            <Cabecera texto={"Componente 6"} />
            <Descripcion texto={"Crear un componente que nos traiga la temperatura de 5 ciudades que tendremos almacenadas en un ARRAY . Usaremos la api https://openweathermap.org/api para obtener los datos de las temperaturas. El componente mostrará el nombre de la ciudad :temperatura en grados centígrados / kelvin."} />
            {ciudades.map(ciudad => (
                <div key={ciudad}>
                    <p>Ciudad: {ciudad}, temperatura: {temperatura[ciudad]?.main.temp} ºC</p>
                </div>
            ))}            
        </>
    );
}

export default Componente6;