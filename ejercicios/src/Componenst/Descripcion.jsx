import React from 'react';
import PropTypes from 'prop-types'

const Descripcion = (props) => {
    const texto = props.texto;
    return (<p> {texto} </p>);

}

Descripcion.propTypes = {
    texto: PropTypes.string.isRequired,
}

    // Le asigna un valor por defecto
Descripcion.defaultProps = {
    texto: 'No hay descripcion'
}

export default Descripcion;