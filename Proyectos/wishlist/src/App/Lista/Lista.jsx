import React from 'react';
import PropTypes from 'prop-types'
import ListaItem from '../ListaItem';

const Lista = ({deseos, onDeseosChange}) => {
  return (
    <ul className='lista-deseos'>
      {deseos.map(({ texto, realizado}, i) => (
        <ListaItem texto={texto} realizado={realizado} id={`deseo{i}`} key={texto} onRealizadoChange={(value) => {
          const updatedDeseos = [...deseos];
          updatedDeseos[i].realizado = value;
          onDeseosChange(updatedDeseos);
        }} />
      ))}
    </ul>
  );
}

Lista.propTypes = {
  deseos: PropTypes.arrayOf(PropTypes.shape({
    texto: PropTypes.string,
    realizado: PropTypes.bool,
  })),
  onDeseosChange: PropTypes.func,
}

Lista.defaultProps = {
  deseos: [],
  onDeseosChange: () => {},
}

export default Lista;