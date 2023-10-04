import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import reportWebVitals from './reportWebVitals';
import Error from './Routes/Error';
import Home from './Routes/Home';
import Characters from './Routes/Characters';
import Vehicles from './Routes/Vehicles';
import Starships from './Routes/Starships';
import Planets from './Routes/Planets';
import Species from './Routes/Species';
import Films from './Routes/Films';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

  // Otra forma de dar estilos
const styles = {
  backgroundColor: 'black'
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "Characters/:charid",
    element: <Characters />,
  },
  {
    path: "Films/:charid",
    element: <Films />,
  },
  {
    path: "vehicles/:charid",
    element: <Vehicles />,
  },
  {
    path: "starships/:charid",
    element: <Starships />,
  },
  {
    path: "planets/:charid",
    element: <Planets />,
  },
  {
    path: "species/:charid",
    element: <Species />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid' style={styles}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
