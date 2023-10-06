import React from 'react';
import { Link } from 'react-router-dom';

function RecetaCard({ receta }) {
  return (
    <Link to={`/recetas/${receta.id}`}>
      <div className="receta-card">
        <img src={receta.imagenSrc} alt={receta.nombre} />
        <h3>{receta.nombre}</h3>
        <p>{receta.descripcion}</p>
      </div>
    </Link>
  );
}

export default RecetaCard;


