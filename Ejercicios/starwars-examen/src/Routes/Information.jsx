import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ObtenerNombre from './ObtenerNombre';
import Imagen from './Imagen';

const Information = (props) => {

    const [page, setPage] = useState(1);

    const elementsPerPage = 4;
    const start = (page - 1) * elementsPerPage;
    const end = start + elementsPerPage;
    const currentInfo = props.info && props.info.length > 0 ? props.info.slice(start, end) : [];
    const totalPages = props.info && props.info.length > 0 ? Math.ceil(props.info.length / elementsPerPage) : 0;

    return (
        <div className="col-auto bg-white" id='containerInformartion'>
            <h4 className="border-bottom pb-2">Reloted {props.title} </h4>
            <div id="navContainer">
            {currentInfo.length > 0 ? (
                <>
                    <ul>
                        {currentInfo.map((dato) => {
                            let check = dato.split("/");
                            let id = check[check.length - 2];
                            return (
                                <li className='elemento' key={id}>
                                    <Link
                                        className="text-decoration-none d-flex flex-column align-items-center "
                                        to={`/${props.name}/${id}`}>
                                        <Imagen className="rounded-circle mt-2" name={props.name} identificador={id} width={"40px"} height={"40px"}/>
                                        <ObtenerNombre name={props.name} id={id} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {totalPages !==  1 ? (
                    <div className="d-flex justify-content-center align-items-center p-2 mt-4 border-top">
                        <button id="boton-izquierda" className="btn rounded-circle" hidden={page === 1}
                        onClick={() => setPage(page - 1)}>{"<"}</button>
                        <span>{page ===  1 ? (<>Siguiente</>) : null}
                        {page ===  totalPages ? (<>Antetior</>) : null}</span>
                        <button id='boton-derecha' className="btn rounded-circle" hidden={page === totalPages}
                        onClick={() => setPage(page + 1)}>{">"}</button>
                    </div>
                    ) : <div className='p-2'><p></p></div>}
                </> 
                ) : (
                    <p className="text-center">No existen elementos de esta categoria</p>
                )}
            </div>
        </div>
    )
}
export default Information;