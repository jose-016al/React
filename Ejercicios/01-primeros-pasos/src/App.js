import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {

  const ficha_medica = {
    altura: "180cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Primer proyecto</p>
        
        {/* Cargar el primer componente */}
        <div className='componentes'>
          <hr />
          <EventosComponentes />
          <hr />
          <TercerComponente ficha={ficha_medica} />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>

    </div>
  );
}

export default App;
