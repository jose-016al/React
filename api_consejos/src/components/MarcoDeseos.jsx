import React from "react";
import classNames from 'classnames';


const MarcoDeseos = (props) => 
    <div className={classNames('marco ', props.color)}>
        {props.children}
    </div>



export default MarcoDeseos;