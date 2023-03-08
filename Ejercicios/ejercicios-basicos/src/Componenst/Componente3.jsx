import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente3 = () => {
    const [counter, setCounter] = useState(60);
    useEffect( () => {
        if (counter !== 0) {
            const interval = setInterval(
                () => setCounter(counter - 1), 1000
            );
            return () => clearInterval(interval);
        }
    });
    return (
        <>
            <Cabecera texto={"Componente 3"}/>
            <Descripcion texto={"Crear un componente que cada segundo descuente 1 desde 60 a 0. Temporizador hacia atrás"}/>
            <h2>{counter}</h2>
        </>
    );
}

export default Componente3;