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