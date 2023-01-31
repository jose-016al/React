import React from 'react';
import classNames from "classnames";
import { useState } from 'react';

const ListaItem = ({texto, realizado, i}) => {
  const [checked, setChecked] = useState(false);
  return (
  <li key={texto} className={classNames('lista-deseos__item',{'lista-deseos__item--cumplido': checked})}>
    <input id={`deseo${i}`} type="checkbox"
    checked={checked ? true : false} onClick={() => setChecked(!checked)} />
    <label htmlFor={`deseo${i}`}>{texto}</label>
  </li>
  );
}

export default ListaItem;