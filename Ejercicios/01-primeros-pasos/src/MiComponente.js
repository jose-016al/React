// Importar modulos de react / dependencias
// Import React from "react";

// Funcion del compoennt
const MiComponente = () => {

    let usuario = {
        nombre: "Jose",
        apellidos: "Almiron Lopez",
        web: "www.jose.es"
    }

    return (
        <>
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellidos: {usuario.apellidos}</li>
                <li>Web: {usuario.web}</li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </>
    );
};

// Exportamos el componete
export default MiComponente;