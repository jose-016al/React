import React from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames";

const ListaItem = ({texto, realizado, id, onRealizadoChange}) => {

  return (
  <li key={texto} className={classNames('lista-deseos__item',{'lista-deseos__item--cumplido': realizado})}>
    <input id={id} type="checkbox" onChange={e => onRealizadoChange(e.target.checked)}
    checked={realizado} />
    <label htmlFor={id}>{texto}</label>
  </li>
  );
}

ListaItem.propTypes = {
  TEXTO: PropTypes.string,
  realizado: PropTypes.bool,
  id: PropTypes.string,
  onRealizadoChange: PropTypes.func,
}

ListaItem.defaultProps = {
  texto: "",
  realizado: false,
  id: "",
  deseos: () => {},
}

export default ListaItem;