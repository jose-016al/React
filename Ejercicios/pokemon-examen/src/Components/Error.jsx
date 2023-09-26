import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="contaienr-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <h1 className="display-1"><strong>¡Vaya, vaya, vaya! </strong></h1>
                <p className="lead">Parece que esta página se perdió en el ciberespacio. Pero no te preocupes, encontraremos el camino de
                    <Link className="text-decorration-none" to={`/`}><p>vuelta.</p></Link>
                </p>
                <p className="lead"><strong><i>{error.statusText || error.message}</i></strong></p>
            </div>
        </div>
    );
}

export default Error;