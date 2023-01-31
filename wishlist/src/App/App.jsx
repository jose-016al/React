import Cabecera from './Cabecera';
import FormDeseo from './FormDeseo';
import Lista from './Lista'
import Boton from './Boton'
import './App.css';

const deseos = [
  {texto: "Aprobar javascript", realizado: true},
  {texto: "Aprobar react", realizado: false},
];

const App = () => {
  return (
    <div className='app'>
      <Cabecera />
      <FormDeseo />
      <Lista deseos={deseos}/>
      <Boton />
    </div>
  );
}

export default App;