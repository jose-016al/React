import { useState } from 'react';
import './App.css';
import SelectorPelicula from './Components/SelectorPeliculas';
import Pelicula from './Components/Pelicula';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [selectorId, setSelectorId] = useState("");
  console.log(selectorId);
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center text-center'>
        <div className='col-5'>
          <h1>Selecciona una pelicula</h1>
          <SelectorPelicula selectorId={selectorId} setSelectorId={setSelectorId} />
        </div>
        <div className='col-6'>
          <Pelicula selectorId={selectorId} />
        </div>
      </div>
    </div>
  )
}

export default App;