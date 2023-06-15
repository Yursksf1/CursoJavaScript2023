import React, { useState } from 'react';

// Componente Pizza
const Pizza = ({ nombre, ingredientes, precio }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Ingredientes: {ingredientes}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

// Componente principal
const App = () => {
  // Estado para la cantidad de rebanadas
  const [cantidadRebanadas, setCantidadRebanadas] = useState(8);

  // Función para comer una rebanada
  const comerRebanada = () => {
    if (cantidadRebanadas > 0) {
      setCantidadRebanadas(cantidadRebanadas - 1);
    }
  };

  return (
    <div>
      <h1>¡Bienvenido a nuestra pizzería!</h1>
      <Pizza nombre="Pizza de queso" ingredientes="Queso, salsa de tomate" precio={12} />
      <p>Cantidad de rebanadas restantes: {cantidadRebanadas}</p>
      <button onClick={comerRebanada}>Comer una rebanada</button>
    </div>
  );
};

export default App;