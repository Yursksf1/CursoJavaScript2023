/*

En ReactJS, el estado (state) es un objeto que representa la información interna de un componente 
y se utiliza para gestionar los datos y el comportamiento de un componente a lo largo del tiempo.

*/

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(100);

  function handleClickReduce() {
    setCounter(counter - 1);
  }
  function handleClickAumentar() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1> Contador </h1>
      <p>El contador es: {counter}</p>
      <button onClick={handleClickReduce}>Reducir (-)</button>
      <button onClick={handleClickAumentar}>Aumentar (+)</button>
    </div>
  );
}

export default App;

// Ejercicio
// 1) Reflexionar/Pensar/imaginar como se haria esta funcionlidad en Js usando vanilla Js, (dom)
// 2) crear funcionalidades para aumentar o disminuir de 2 en 2 y de 10 en 10 
// 3) implementar la funcionalidad de aumentar/reducir el numero de mascotas en el proyecto base del curso



