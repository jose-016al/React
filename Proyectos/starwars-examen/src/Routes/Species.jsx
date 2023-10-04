import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";
import Imagen from "./Imagen";

const Species = () => {

    const [datos, setDatos] = useState([]);

    const {charid} = useParams();
    
    useEffect(() => {
        fetchDatos();
    }, []);
    
    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/species/${charid}/`;
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
            <h4 className="text-white" id="navTitulos"><Link className="text-decoration-none" to={`/`}>Home</Link> / Species / { datos.name }</h4>
            <div className="row bg-white">
                <div className="col-auto p-0" id="containerImagen">
                    <Imagen name={"species"} identificador={charid} width={"250px"} height={"100%"}/>
                </div>
                <div className="col-8 my-1" id="peopleContainer">
                    <h2>{ datos.name }</h2>
                    <p>Classification: { datos.classification }</p>
                    <p>Designation: { datos.designation }</p>
                    <p>Language: { datos.language }</p>
                    <p>Avg Lifespan: { datos.average_lifespan } years</p>
                    <p>Avg Height: { datos.average_height } cm</p>
                    <p>Hair Color(s): { datos.hair_colors }</p>
                    <p>Skin Color(s): { datos.skin_colors }</p>
                    <p>Eye Color(s): { datos.eye_colors }</p>
                </div>
            </div>
            <div className="row justify-content-center pt-4" id="informacionPeopleContainer">
                <Information name={"films"} info={datos.films} title={"Films"}/>
                <Information name={"characters"} info={datos.people} title={"Characters"}/>
            </div>
        </div>
    );
}

export default Species;