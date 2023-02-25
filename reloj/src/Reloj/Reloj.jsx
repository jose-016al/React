import React, { useEffect } from "react";
import './Reloj.css';
import { useState } from 'react';

const Reloj = () => {
    const [counter, setCounter] = useState(0);
    useEffect( () => {
        const interval = setInterval(
            () => setCounter(new Date().toLocaleTimeString()), 1000
        );
        return () => clearInterval(interval);
    });
    return (
        <div className="Reloj">
            <h1> {counter} </h1>
        </div>
    );
};


export default Reloj;