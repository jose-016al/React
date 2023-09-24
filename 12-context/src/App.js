import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    /* La primera vez que se carga el componente */
    let user = JSON.parse(localStorage.getItem("user"))
    setUsuario(user);
  }, []);

  useEffect(() => {
    /* Cada vez que se actualiza el estado usuario se guarda en el localStorage */
    localStorage.setItem("user", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className="App">
      {/* Con el value le asignmaos la informacion a compartir como se haria con las props */}
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
