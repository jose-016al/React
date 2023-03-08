import Componente1 from './Componenst/Componente1';
import Componente2 from './Componenst/Componente2';
import Componente3 from './Componenst/Componente3';
import Componente4 from './Componenst/Componente4';
import Componente5 from './Componenst/Componente5';
import Componente6 from './Componenst/Componente6';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div>
        <Componente1/>
      </div>
      <div>
        <Componente2/>
      </div>
      <div>
        <Componente3/>
      </div>
      <div>
        <Componente4/>
      </div>
      <div>
        <Componente5/>
      </div>
      <div>
        <Componente6/>
      </div>
    </div>
  );
}

export default App;