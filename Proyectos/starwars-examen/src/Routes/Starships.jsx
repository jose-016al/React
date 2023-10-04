import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";
import Imagen from "./Imagen";


const Starships = () => {

    const [datos, setDatos] = useState([]);

    const {charid} = useParams();
    
    useEffect(() => {
        fetchDatos();
    }, []);
    
    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/starships/${charid}/`;
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
            <h4 className="text-white" id="navTitulos"><Link className="text-decoration-none" to={`/`}>Home</Link> / Starships / { datos.name }</h4>
            <div className="row bg-white">
                <div className="col-auto p-0">
                    <Imagen name={"starships"} identificador={charid} width={"350px"} height={"100%"}/>
                </div>
                <div className="col-5 my-1" id="peopleContainer">
                    <h2>{ datos.name }</h2>
                    <p>Model: { datos.model }</p>
                    <p>Manufacturer: { datos.manufacturer }</p>
                    <p>Class: { datos.starship_class }</p>
                    <p>Cost: { datos.cost_in_credits } credits</p>
                    <p>Speend: { datos.max_atmosphering_speed }</p>
                    <p>Hyperdrive Rating: { datos.hyperdrive_rating }</p>
                    <p>MGLT: { datos.MGLT }</p>
                    <p>Lenght: { datos.length }m</p>
                    <p>Cargo Copacity: { datos.cargo_capacity } metric tons</p>
                    <p>Mimimum Crew: { datos.crew }</p>
                    <p>Passengers: { datos.passengers }</p>
                </div>
            </div>
            <div className="row justify-content-center pt-4" id="informacionPeopleContainer">
                <Information name={"films"} info={datos.films} title={"Films"}/>
                <Information name={"characters"} info={datos.pilots} title={"Pilots"}/>
            </div>
        </div>
    );
}

export default Starships;