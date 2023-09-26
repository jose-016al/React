import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

const Pelicula = ({selectorId}) => {
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
        <Card style={{ width: '500px' }}>
            {pelicula[selectorId] && (
            <Card.Body>
                <Card.Title className="text-center"> { pelicula[selectorId].title } </Card.Title>
                <img className="mx-auto d-block" src={`https://image.tmdb.org/t/p/w500/${pelicula[selectorId].poster_path}`} alt="Poster de la película" style={{ width: '250px'}}/>
                <Card.Text className="text-center">
                    {pelicula[selectorId].overview}
                </Card.Text>
            </Card.Body>
            )}
        </Card>
    );
}

export default Pelicula;