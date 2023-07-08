import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const parquesBucaramanga = [
  { nombre: 'Parque García Rovira', lat: 7.12044, lon: -73.12136 },
  { nombre: 'Parque Santander', lat: 7.12007, lon: -73.12356 },
  { nombre: 'Parque Romero', lat: 7.12721, lon: -73.12761 },
  { nombre: 'Parque Centenario', lat: 7.12574, lon: -73.12312 },
  { nombre: 'Parque Mejoras Públicas', lat: 7.12679, lon: -73.11873 },
  { nombre: 'Parque de los Niños', lat: 7.11985, lon: -73.13125 },
  { nombre: 'Parque Antonia Santos', lat: 7.12021, lon: -73.12638 },
  { nombre: 'Parque Bolívar', lat: 7.11726, lon: -73.12115 },
  { nombre: 'Parque de los Leones', lat: 7.12189, lon: -73.11565 },
  { nombre: 'Parque Flora Urbana', lat: 7.12418, lon: -73.13769 }
];

function MapaPlotly() {
  useEffect(() => {
    const data = [
      {
        type: 'scattermapbox',
        lat: parquesBucaramanga.map(parque => parque.lat),
        lon: parquesBucaramanga.map(parque => parque.lon),
        mode: 'markers',
        marker: {
          size: 14,
        },
        text: parquesBucaramanga.map(parque => parque.nombre)
      },
    ];

    const layout = {
      autosize: true,
      hovermode: 'closest',
      mapbox: {
        bearing: 0,
        center: {
          lat: 7.12044, // Latitud de una ubicación específica (por ejemplo, el Parque García Rovira)
          lon: -73.12136, // Longitud de una ubicación específica (por ejemplo, el Parque García Rovira)
        },
        pitch: 0,
        zoom: 13,
      },
    };

    Plotly.setPlotConfig({
      mapboxAccessToken: 'pk.eyJ1IjoieXVycyIsImEiOiJjbGp0OHJ0cG4wdGY4M21vN3ZlcHFzbmJmIn0.jFe1WgtPREm9V5isl-FMUg',
    });

    Plotly.newPlot('myDiv', data, layout);
  }, []);

  return <div id="myDiv" />;
}

export default MapaPlotly;