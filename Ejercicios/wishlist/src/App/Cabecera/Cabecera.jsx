import React from 'react';
import PropTypes from 'prop-types'

const Cabecera = (props) => {
    const texto = props.texto;
    return (<h1> {texto} </h1>);

}

Cabecera.propTypes = {
    texto: PropTypes.string.isRequired,
}

    // Le asigna un valor por defecto
Cabecera.defaultProps = {
    texto: 'My Wishlist'
}

export default Cabecera;