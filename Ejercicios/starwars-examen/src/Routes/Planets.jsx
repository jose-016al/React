import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";
import Imagen from "./Imagen";

const Planets = () => {

    const [datos, setDatos] = useState([]);

    const {charid} = useParams();
    
    useEffect(() => {
        fetchDatos();
    }, []);
    
    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/planets/${charid}/`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setDatos(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <div className="container pb-5 vh-100">
            <h4 className="text-white" id="navTitulos"><Link className="text-decoration-none" to={`/`}>Home</Link> / Planets / { datos.name }</h4>
            <div className="row bg-white">
                <div className="col-auto p-0">
                    <Imagen name={"planets"} identificador={charid} width={"250px"} height={"100%"}/>
                </div>
                <div className="col-8 my-1" id="peopleContainer">
                    <h2>{ datos.name }</h2>
                    <p>Population: { datos.population }</p>
                    <p>Rotation Period: { datos.rotation_period } days</p>
                    <p>Orbital Period: { datos.orbital_period } days</p>
                    <p>Diameter: { datos.diameter }km</p>
                    <p>Gravity: { datos.gravity }</p>
                    <p>Terrain: { datos.terrain }</p>
                    <p>Surface Water: { datos.surface_water }%</p>
                    <p>Climate: { datos.climate }</p>
                </div>
            </div>
            <div className="row justify-content-center pt-4" id="informacionPeopleContainer">
                <Information name={"films"} info={datos.films} title={"Films"}/>
                <Information name={"characters"} info={datos.residents} title={"Residents"}/>
            </div>
        </div>
    );
}

export default Planets;