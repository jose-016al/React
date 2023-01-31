import React from 'react';


const Boton = () => {
    const boton = () => {alert("Has pinchado");}
    return (
        <button className='deseo-clear' type="buttom" onClick={boton}>Archivar</button>
    );
}

export default Boton;