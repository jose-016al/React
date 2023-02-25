import React, { useState } from "react";
import Cabecera from "./Cabecera";
import Descripcion from "./Descripcion";

const Componente4 = () => {
    const [texto, setTexto] = useState("Componente 4");
    function updateText(e) {
        setTexto(e.target.value);
    }
    return (
        <>
            <Cabecera texto={texto}/>
            <Descripcion texto={"Crea un componente que a través de un input añada en otro componente el texto introducido dentro de un DIV."}/>
            <input onChange={updateText} type="text" placeholder="Cambiar titulo" />
        </>
    );
}

export default Componente4;