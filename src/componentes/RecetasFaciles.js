import React, { useState } from 'react';
import tacos from '../img/tacosgt.jpg';
import pastap from '../img/pastap.jpg';
import receta1 from '../img/facil 1.png';
import receta2 from '../img/facil 2.png';
import receta3 from '../img/facil 3.png';


//un comentario



function Card({ recipe }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    perspective: '1000px',
    width: '1000px', // Adjust card width
    height: '500px', // Adjust card height
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'transform 0.5s, box-shadow 0.3s',
    margin: '10px', // Add margin to create space between cards
  };

  const hoverCardStyles = {
    ...cardStyles,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    transform: 'scale(0.95)', // Scale down slightly on hover
  };

  const innerStyles = {
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
  };

  const frontStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: '10px',
    flexDirection: 'column',
  };

  const backStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    transform: 'rotateY(180deg)',
    flexDirection: 'column',
  };

  return (
    <div style={isFlipped ? hoverCardStyles : cardStyles} onClick={handleFlip}>
      <div style={innerStyles}>
        <div style={frontStyles}>
          {/* Content for the front of the card */}
          <img src={recipe.imageSrc} alt={recipe.name} width="70%" height="70%" />
          <h3>{recipe.name}</h3>
          <p> {recipe.ingredients.join(', ')}</p>
        </div>
        <div style={backStyles}>
          {/* Content for the back of the card */}
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  const recipes = [
    {
      name: 'CHURROS RELLENOS DE QUESO',
      imageSrc: receta1,
      ingredients: ['Aprende cómo hacer churros caseros con esta receta que combina sabores muy comunes en México, una textura crujiente y un relleno suave. Estos churros rellenos de queso son más fáciles de hacer de lo que podrías creer y no te arrepentirás de prepararlos.'],
      instructions: ['Step 1: Do something', 'Step 2: Do something else'],
    },
    {
      name: 'CHEESECAKE DE MANZANA Y COCO',
      imageSrc: receta2,
      ingredients: ['¿Sabías que el cheesecake es uno de los postres más fáciles y rendidores? Además, se prepara con ingredientes muy baratos, tales como huevo, queso crema y galleta molida, así que este cheesecake de manzana y coco es ideal para disfrutar con una taza de café o para vender postres.'],
      instructions: ['Step 1: Do another thing', 'Step 2: Do one more thing'],
    },{
      name: 'SPAGHETTI ALLA BOLOGNESE DE VEGETALES',
      imageSrc: receta3,
      ingredients: ['La comida italiana es un clásico que no pasa de moda, por eso todos preparamos versiones caseras, pero igual de deliciosas para el menú de la semana o una ocasión especial.'],
      instructions: ['Step 1: Do another thing', 'Step 2: Do one more thing'],
    },{
        name: 'CHURROS RELLENOS DE QUESO',
        imageSrc: receta1,
        ingredients: ['Aprende cómo hacer churros caseros con esta receta que combina sabores muy comunes en México, una textura crujiente y un relleno suave. Estos churros rellenos de queso son más fáciles de hacer de lo que podrías creer y no te arrepentirás de prepararlos.'],
        instructions: ['Step 1: Do something', 'Step 2: Do something else'],
      },
      {
        name: 'CHEESECAKE DE MANZANA Y COCO',
        imageSrc: receta2,
        ingredients: ['¿Sabías que el cheesecake es uno de los postres más fáciles y rendidores? Además, se prepara con ingredientes muy baratos, tales como huevo, queso crema y galleta molida, así que este cheesecake de manzana y coco es ideal para disfrutar con una taza de café o para vender postres.'],
        instructions: ['Step 1: Do another thing', 'Step 2: Do one more thing'],
      },{
        name: 'SPAGHETTI ALLA BOLOGNESE DE VEGETALES',
        imageSrc: receta3,
        ingredients: ['La comida italiana es un clásico que no pasa de moda, por eso todos preparamos versiones caseras, pero igual de deliciosas para el menú de la semana o una ocasión especial.'],
        instructions: ['Step 1: Do another thing', 'Step 2: Do one more thing'],
      }
    
    // Add more recipes as needed
  ];

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // Show one card per row
    gap: '10px', // Add gap between grid items
  };

  return (
    <div style={gridStyles}>
      {recipes.map((recipe, index) => (
        <Card key={index} recipe={recipe} />
      ))}
    </div>
  );
}

function App() {
  const appStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={appStyles}>
      <Grid />
    </div>
  );
}

export default App;


