import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const EjercicioComponent = ({ year }) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
        setYearNow(yearNow + 1);
    }

    const anterior = e => {
        setYearNow(yearNow - 1);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        if (Number.isInteger(dato)) {
            setYearNow(dato);
        } else {
            setYearNow(year);
        }
    }

    return (
        <div>
            <h1>Ejercicio con Eventos y UseState</h1>
            <strong className='label label-green'>{ yearNow }</strong>
            <p>
                <button onClick={ siguiente }>SIGUIENTE</button>
                &nbsp;
                <button onClick={ anterior}>ANTERIOR</button>
            </p>
            <p> Cambiar año:
                <input type='text' onChange={ cambiarYear } placeholder='Cambia el año' />
            </p>
        </div>
    )
}

    // Validamos que la fecha sea un number y que sea requerida
EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired,
}