import React from 'react'

export const EventosComponentes = () => {

    const handleClick = (e, nombre) => {
        alert("Has dado click al boton " + nombre)
    }

    const handleDoubleClick = () => {
        alert("Has dado doble click")
    }

    const handleEnter = (e, accion) => {
        alert(`Has ${accion} a la caja con el mouse`)
    }

    const handleFocus = e => {
        console.log("Estas dentro del input, mete tu nombre")
    }

    const handleBlur = e => {
        console.log("Estas fuera del input")
    }

    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/* Evento click */}
                <button onClick={e => handleClick(e, "Jose")}>Dame click!</button>
            </p>
            <p>
                {/* Evento doble click */}
                <button onDoubleClick={handleDoubleClick}>Dame doble click!</button>
            </p>
            <div id='caja' 
                onMouseEnter={e => handleEnter(e, "entrado")} 
                onMouseLeave={e => handleEnter(e, "salido")}>
                {/* Evento onMouserEnter onMouseLeave */}
                Pasa por encima!!
            </div>
            <p>
                {/* Evento onFcous onBlur */}
                <input type='text' 
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                    placeholder='introduce tu nombre' />
            </p>
        </div>
    )
}
