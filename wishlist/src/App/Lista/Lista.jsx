import React from 'react';
import ListaItem from '../ListaItem';

const Lista = ({deseos}) => {
  return (
    <ul className='lista-deseos'>
      {deseos.map(({ texto, realizado}, i) => (
        <ListaItem texto={texto} realizado={realizado} i={i} />
      ))}
    </ul>
  );
}

export default Lista;