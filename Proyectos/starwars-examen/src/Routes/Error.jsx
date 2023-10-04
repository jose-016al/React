import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import yodaError from './img/YodaError.png';

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="contaienr-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <h1 className="display-5 text-white"><strong>Error cometido has. Aprender debes, joven padawan.</strong></h1>
                <p className="lead text-white">Te alejas de la luz y en el lado oscuro de los Siths te adentras, joven padawan. Peligroso, este camino es. Regresa al Camino de la Luz,</p>
                <div className="row">
                    <img className="mx-auto" id="imgErrorPage" src={yodaError} alt="Foto yoda" style={{ width: '320px', paddingRight: '50px'}} />
                    <Link className="text-decorration-none" to={`/`}>Que la Fuerza te acompañe</Link>
                </div>
                <p className="lead text-white"><strong><i>{error.statusText || error.message}</i></strong></p>
            </div>
        </div>
    );
}

export default Error;