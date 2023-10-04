import logo from './logo.svg';
import './App.css';
import { Tareas } from './components/Tareas';
import { Gestion } from './components/Gestion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tareas />
        <Gestion />
      </header>
    </div>
  );
}

export default App;
