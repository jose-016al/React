import React from 'react';
import PropTypes from 'prop-types'

const Cabecera = (props) => {
    const texto = props.texto;
    return (<h2> {texto} </h2>);
}
    // Asignamos que su valor es obligatorio
Cabecera.propTypes = {
    texto: PropTypes.string.isRequired,
}
    // Le asigna un valor por defecto
Cabecera.defaultProps = {
    texto: 'Componente'
}

export default Cabecera;