import React from 'react';
import tacos from '../img/tacosgt.jpg';

function Receta({ match }) {

  const recetas = {
    id: 1,
    nombre: 'Tacos Chapines',
    ingredientes: [
      '500g de carne de res molida',
      '1 cebolla picada',
      '2 tomates picados',
      '2 chiles jalapeños picados',
      '2 dientes de ajo picados',
      '1 cucharada de comino',
      '1 cucharada de chile en polvo',
      '1 cucharadita de sal',
      'Tortillas de maíz',
      'Salsa de tomate',
      'Aguacate en rodajas',
      'Cilantro fresco picado',
    ],
    instrucciones: [
      'En una sartén grande, cocine la carne de res molida a fuego medio hasta que esté dorada.',
      'Agregue la cebolla, los tomates, los chiles jalapeños y el ajo picados a la sartén y cocine hasta que las verduras estén tiernas.',
      'Añada el comino, el chile en polvo y la sal, y mezcle bien.',
      'Caliente las tortillas de maíz en una sartén o en el microondas.',
      'Rellene cada tortilla con la mezcla de carne y verduras.',
      'Agregue salsa de tomate, rodajas de aguacate y cilantro fresco al gusto.',
      'Sirva los Tacos Chapines calientes y disfrute.',
    ],
    imagenSrc: tacos,
    tiempoPreparacion: '30 minutos',
    porciones: '4 porciones',
  };

  const receta = recetas.find(receta => receta.id === parseInt(match.params.id, 10));

  if (!receta) {
    return <div>No se encontró la receta.</div>;
  }

  return (
    <div className="receta">
    <h1>{receta.nombre}</h1>
    <img src={receta.imagenSrc} alt={receta.nombre} width="80%" height="auto" />
    <h2>Ingredientes:</h2>
    <ul>
      {receta.ingredientes.map((ingrediente, index) => (
        <li key={index}>{ingrediente}</li>
      ))}
    </ul>
    <h2>Instrucciones:</h2>
    <ol>
      {receta.instrucciones.map((paso, index) => (
        <li key={index}>{paso}</li>
      ))}
    </ol>
    <p>Tiempo de preparación: {receta.tiempoPreparacion}</p>
    <p>Porciones: {receta.porciones}</p>
  </div>
  );
}

export default Receta;

