import React from 'react';
import PropTypes from "prop-types"

const Boton = ({ onArchivadoClick }) => {
    return (
        <button className='deseos-clear' type="buttom" onClick={onArchivadoClick}>Archivar</button>
    );
}

Boton.propTypes = {
    onArchivadoClick: PropTypes.func,
}

Boton.defaultProp = {
    onArchivadoClick: () => {},
}

export default Boton;