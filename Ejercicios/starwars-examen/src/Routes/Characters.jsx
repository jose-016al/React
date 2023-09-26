import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";
import Imagen from "./Imagen";
import ObtenerNombre from './ObtenerNombre';

const Characters = () => {

    const [datos, setDatos] = useState([]);

    const {charid} = useParams();
    
    useEffect(() => {
        fetchDatos();
    }, []);
    
    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/people/${charid}`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setDatos(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    
    const planetId = datos.homeworld ? parseInt(datos.homeworld.split("/")[5]) : null;
    const speciesId = datos.species && datos.species.length > 0 ? parseInt(datos.species[0].split("/")[5]) : null;

    return (
        <div className="container vh-100">
            <h4 className="text-white" id="navTitulos"><Link className="text-decoration-none" to={`/`}>Home</Link> / Characters / { datos.name }</h4>
            <div className="row bg-white">
                <div className="col-auto p-0" id="containerImagen">
                    <Imagen name={"characters"} identificador={charid} width={"250px"}/>
                </div>
                <div className="col-auto my-1" id="peopleContainer">
                    <h2>{ datos.name }</h2>
                    <p>Bith Year: { datos.birth_year }</p>
                    <p>Species: 
                    { datos.species && (
                        <Link to={`/planets/${speciesId}`}>
                        <ObtenerNombre name={"species"} id={speciesId} />
                    </Link>
                    )}
                    </p>
                    <p>Height: { datos.height }cm</p>
                    <p>Mass: { datos.mass }kg</p>
                    <p>Gender: { datos.gender }</p>
                    <p>Hair color: { datos.hair_color }</p>
                    <p>Skin color: { datos.skin_color }</p>
                    <p>Homeworld: 
                    {datos.homeworld && (
                        <Link to={`/planets/${planetId}`}>
                        <ObtenerNombre name={"planets"} id={planetId} />
                    </Link>
                    )}
                    </p>
                </div>
            </div>
            <div className="row justify-content-between pt-4" id="informacionPeopleContainer">
                <Information name={"films"} info={datos.films} title={"Films"}/>
                <Information name={"vehicles"} info={datos.vehicles} title={"Vehicles"}/>
                <Information name={"starships"} info={datos.starships} title={"Starships"}/>
            </div>
        </div>
    );
}

export default Characters;