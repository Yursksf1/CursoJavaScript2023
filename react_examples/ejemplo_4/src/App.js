/*

En ReactJS, el estado (state) es un objeto que representa la información interna de un componente 
y se utiliza para gestionar los datos y el comportamiento de un componente a lo largo del tiempo.

*/

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [valorCalulado, setValorCalulado] = useState(0);

  const handleButtonClick = () => {
    console.log('Valor del campo de entrada:', inputValue);

    // Tu formula va aca
    const newValorCalulado = inputValue * 12

    setValorCalulado(newValorCalulado)

  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Obtener Valor</button>

      <div>
        <p>
          {valorCalulado}
        </p>
      </div>
    </div>
  );
}

export default App;

// Ejercicio
// 1) Reflexionar/Pensar/imaginar como se haria esta funcionlidad en Js usando vanilla Js, (dom)
// 2) crear funcionalidades para aumentar o disminuir de 2 en 2 y de 10 en 10 
// 3) implementar la funcionalidad de aumentar/reducir el numero de mascotas en el proyecto base del curso



