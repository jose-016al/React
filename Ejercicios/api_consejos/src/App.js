import './App.css';
import React, { useState } from 'react';
import MarcoDeseos from './components/MarcoDeseos';
import { useEffect } from 'react';

function App() {
  const [consejo, setConsejo]=useState ([]);

  useEffect(() => {
    fetchDatos();
  }, []);

  const fetchDatos = async () => {
    try{
      const url = "https://api.adviceslip.com/advice";
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      setConsejo(json.slip);
    }
    catch (error){
      console.log("error: "+error);
    } 
  }

  return (
    <MarcoDeseos color="rojo">
      <h1>Consejo: {consejo.id}</h1>
      <h2>{consejo.advice}</h2>  
    </MarcoDeseos>
  )
}

export default App;








// //hook de estado para el consejo
//   const [consejo, setConsejo] = useState([]);

//   useEffect(() => {
//      //Llamamos a fetchData
//     fetchData();
//   }, []);

//   //Forma 1: promesa pura --> te dice que lo conviertas a async
//   /* const fetchData1 = () => {
//      return fetch("https://api.adviceslip.com/advice")
//            .then((response) => response.json())
//            .then((data) => console.log(data));
//    } */

//   //Forma 2: con promesa dentro de async
//   const fetchData = async () => { //Función asíncrona que espera a que se resuelva la promesa
//     try {
//       const url = "https://api.adviceslip.com/advice"; //URL de la API que da consejos
//       const response = await fetch(url); //Llamamos a la API y esperamos la respuesta de pasar a la siguiente linea
//       const json = await response.json(); //Transformamos la respuesta a json
//       setConsejo(json.slip); //La pintamos por consola
        
//     } catch (error) {
//         console.log("error", error);
//     }
//   };
 
//   return (
//     <MarcoDeseos color="rojo">
//       <h1>Consejo: {consejo.id}</h1> 
//       <h2> {consejo.advice}</h2>
//     </MarcoDeseos>
//   );