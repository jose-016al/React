import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Pokemon = () => {
    const [datos, setDatos] = useState([]);
    const [abilities, setAbilities] = useState([]);

    const { charid } = useParams();

    useEffect(() => {
        fetchDatos();
    }, [charid]);

    const fetchDatos = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${charid}`;
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setDatos(json);
            setAbilities(json.abilities);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <div className="pt-2 row justify-content-center">
        {charid ? (
            <>
            <h2 className="text-center">Pokemon seleccionado</h2>
            <Card style={{ width: '450px' }}>
                <div id="containerTitulo">
                    <Card.Title id="tituloCard">{datos.name}</Card.Title>
                    <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${charid}.png`} alt="pokemon" style={{ width: '250px'}} /></div>
                </div>
                <h4 className="px-3 border-bottom">ALTURA: {datos.height}</h4>
                <h5 className="px-3 pt-2 border-bottom">Habilidades:</h5>
                <div>
                <ul className="list-group list-group-flush pb-3">
                    {abilities.map((ability) => (
                        <li className="list-group-item" key={ability.ability.name}>
                            {ability.ability.name}
                        </li>
                    ))}
                    </ul>
                </div>
            </Card>
            </>
        ) : (
            <h4 id="textoNinguno">Ningun pokemon seleccinado todavia</h4>
        )}
        </div>
    );
}

export default Pokemon;