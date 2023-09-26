import React, { useEffect, useState } from "react";
import imagen from '../img/img1.jpg';
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente2 = () => {
    const [opacidad, setOpacidad] = useState(1);
    const [texto, setTexto] = useState("");
    useEffect(() => {
        document.querySelector('img').style.opacity = opacidad;
        if (opacidad === 0.5) {
            setTexto("Estas dentro de la imagen");
        } else {
            setTexto("Estas fuera de la imagen");
        }
    }, [opacidad, texto]);
    return (
        <>
            <Cabecera texto={`Componente 2 ${texto}`}/>
            <Descripcion texto={"Crear un componente de tipo img que contenga una imagen. Al posicionar el cursor encima de la imagen cambiaremos la opacidad de la imagen. Al posicionar el cursor fuera de la imagen restableceremos el valor a la opacidad. Adicionalmente a través de una etiqueta h2 mostraremos cuando estemos encima o fuera de la imagen el valor de la opacidad."}/>
            <img onMouseEnter={() => setOpacidad(0.5)} onMouseLeave={() => setOpacidad(1)} src={imagen} alt="imagen" width="50%" />
        </>
    );
}

export default Componente2;