import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Imagen from "./Imagen";

const Home = () => {

    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "https://swapi.dev/api/people/";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            const datosConId = json.results.map((personaje) => ({
                ...personaje, // Usamos la desestructuracion para añadirle una nueva propiedad id, que obtenemos de la url
                id: parseInt(personaje.url.split("/")[5]),
            }));
            setDatos(datosConId);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <div className="container vh-100 text-center">
            <div className="homePersonajes">
                {datos.map((personaje) => (
                    <Card id="cardHome" key={personaje.id} style={{ width:'200px'}}>
                        <Link className="text-black text-decoration-none" to={`/Characters/${personaje.id}`}>
                            <Imagen id="imgHome" className="mx-auto d-block" name={"characters"} identificador={personaje.id} width={"200px"} />
                            <Card.Title>{ personaje.name }</Card.Title>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;