import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente1 = () => {
    const [color, setColor] = useState("white");
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])
    return (
        <>
            <Cabecera texto={"Componente 1"}/>
            <Descripcion texto={"Crear un componente que contenga un botón. Al pulsar dicho botón se cambiará el fondo de la pantalla a un color #abb8c3"}/>
            <button onClick={() => color === "white" ? setColor("#abb8c3") : setColor("white")}>Cambiar Color</button>
        </>
    );
}

export default Componente1;