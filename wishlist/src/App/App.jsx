import Cabecera from './Cabecera';
import FormDeseo from './FormDeseo';
import Lista from './Lista'
import Boton from './Boton'
import './App.css';
import { useState } from 'react';

const deseosIniciales = JSON.parse(localStorage.getItem("deseos"));

const App = () => {
  const [deseos, setDeseos] = useState(deseosIniciales);
  localStorage.setItem('deseos', JSON.stringify(deseos));
  return (
    <div className='app'>
      <Cabecera />
      <FormDeseo onNewDeseo={deseo => setDeseos([deseo, ...deseos])}/>
      <Lista deseos={deseos} onDeseosChange={setDeseos}/>
      <Boton onArchivadoClick={() => setDeseos(deseos.filter(deseo => ! deseo.realizado))} />
    </div>
  );
}

export default App;