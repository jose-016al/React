import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({ pagina, mensaje }) => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        getEmpleados(pagina);
    }, [pagina]);

    const getEmpleados = async(pagina) => {
        try {
            const peticion = await fetch(`https://reqres.in/api/users?page=${pagina}`);
            const {data} = await peticion.json();        

            setEmpleados(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        mensaje();
    }, [pagina]);

    return (
        <div>
            <p>Mostando pagina: { pagina }</p>
            <ol className='usuarios'>
                {
                    empleados.map(empleado => {
                        return <li key={empleado.id}>{`${empleado.first_name} ${empleado.last_name}`}</li>
                    })
                }
            </ol>
        </div>
    )
});