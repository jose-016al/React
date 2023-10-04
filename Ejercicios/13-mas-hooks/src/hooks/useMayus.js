import { useState } from "react";

export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);

    const mayusculas = () => {
        return setMiTexto(texto.toUpperCase());
    }

    const minusculas = () => {
        return setMiTexto(texto.toLowerCase());
    }

    const add = (added) => {
        return setMiTexto(texto += added);
    }

    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        add
    };
}
