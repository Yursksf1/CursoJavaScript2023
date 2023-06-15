import React, { useState } from 'react';

// Componente Pizza
const Pizza = ({ nombre, ingredientes, precio }) => {
  const [cantidadRebanadas, setCantidadRebanadas] = useState(8);

  const comerRebanada = () => {
    if (cantidadRebanadas > 0) {
      setCantidadRebanadas(cantidadRebanadas - 1);
    }
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>Ingredientes: {ingredientes}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad de rebanadas restantes: {cantidadRebanadas}</p>
      <button onClick={comerRebanada}>Comer una rebanada</button>
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <div>
      <h1>¡Bienvenido a nuestra pizzería!</h1>
      <Pizza nombre="Pizza de queso" ingredientes="Queso, salsa de tomate" precio={12} />
      <Pizza nombre="Pizza de pepperoni" ingredientes="Queso, salsa de tomate, pepperoni" precio={14} />
    </div>
  );
};

export default App;


/// Ejercicio:
// con el objetivo de interactuar con el codigo base de este ejemplo, realizar las siguientes actividades
// 1) instanciar mas pizzas para el componente App, ejemplo: ; champiñones, pollo, carnes, etc etc..
// 2) agregar una funcionalidad, si las rebanadas son 0, agregar un menesaje de 'se acabo la pizza'
// 3) agregar un parametro adicional al compomente pizza, que permita renderizar una imagen de la pizza. 