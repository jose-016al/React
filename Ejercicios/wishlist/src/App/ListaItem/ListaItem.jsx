import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames";
import { useState } from 'react';

const ListaItem = ({texto, realizado, id, onRealizadoChange}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let intervalo;
    if (realizado) {
      setTime(0);
    } else {
      intervalo = setInterval(() => {
        if (realizado) {
          clearInterval(intervalo);
        }else {
          setTime(a => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [realizado])

  return (
  <li key={texto} className={classNames('lista-deseos__item',
    {'lista-deseos__item--cumplido': realizado, 
     'lista-deseos__item--warning': time > 5 && time <= 10,
     'lista-deseos__item--danger': time > 10,
    })}>
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