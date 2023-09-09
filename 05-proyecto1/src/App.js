import { useState } from "react";
import { Add } from "./components/Add";
import { List } from "./components/List";
import { Search } from "./components/Search";

function App() {

    const [listadoState, setListadoState] = useState([]);

    return (
        <div className="layout">
            {/* Cabecera */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>

                <h1>MisPelis</h1>
            </header>

            {/* Barra de navegación */}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <section id="content" className="content">

                {/* aqui va el listado de peliculas */}
                <List listadoState={listadoState} setListadoState={setListadoState} />

            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <Search />

                <Add setListadoState={setListadoState} />
            </aside>

            {/* Pie de página */}
            <footer className="footer">
                &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
            </footer>

        </div>
    );
}

export default App;
