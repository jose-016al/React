import logo from './logo.svg';
import './App.css';
import { PruebasComponent } from './components/PruebasComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponent />
      </header>
    </div>
  );
}

export default App;
