import React, { useState } from "react";
import noPictures from './img/noPictures.png';

const Imagen = (props) => {

    const [imagen, setImagen] = useState(`https://starwars-visualguide.com/assets/img/${props.name}/${props.identificador}.jpg`);

    const handleImageError = () => {
        setImagen(noPictures);
    }
    // className="rounded-circle mt-2"
    // style={{ width: "40px", height: "40px" }}
    return (
        <img onError={handleImageError} 
        className={props.className} 
        id={props.id} src={imagen} alt={`Foto ${props.name}`} 
        style={{ width: props.width, height: props.height }}/>
    );
}

export default Imagen;