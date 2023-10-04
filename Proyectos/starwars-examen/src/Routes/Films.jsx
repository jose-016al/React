import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";
import Imagen from "./Imagen";
import NumRom from "./NumRom";

const Films = ({personaje}) => {

    const [datos, setDatos] = useState([]);

    const {charid} = useParams();
    
    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = `https://swapi.dev/api/films/${charid}/`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setDatos(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
    return (
        <div className="container">
            <h4 className="text-white" id="navTitulos"><Link className="text-decoration-none" to={`/`}>Home</Link> / Films / Episode <NumRom num={datos.episode_id}/>{", "+ datos.title }</h4>
            <div className="row bg-white">
                <div className="col-auto p-0" id="containerImagen">
                    <Imagen name={"films"} identificador={charid} width={"250px"}/>
                </div>
                <div className="col-8 my-1" id="peopleContainer">
                    <h2>Episode <NumRom num={datos.episode_id}/>{ ", "+ datos.title }</h2>
                    <p>Director: { datos.director }</p>
                    <p>Producer(s): { datos.producer }</p>
                    <p>Opening Crawl: { datos.opening_crawl }</p>
                </div>
            </div>
            <div className="row justify-content-center pt-4" id="informacionPeopleContainer">
                <Information name={"characters"} info={datos.characters} title={"Characters"}/>
                <Information name={"planets"} info={datos.planets} title={"Planets"}/>
                <Information name={"vehicles"} info={datos.vehicles} title={"Vehicles"}/>
                <Information name={"starships"} info={datos.starships} title={"Starships"}/>
                <Information name={"species"} info={datos.species} title={"Species"}/>
            </div>
        </div>
    );
}

export default Films;