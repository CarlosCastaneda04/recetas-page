import React, { useState } from "react";
import receta1 from "../img/pastaFacil.jpg";

function Card({ recipe, showImage }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    perspective: "1000px",
    width: "600px", // Adjust card width
    height: "500px", // Adjust card height
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.5s, box-shadow 0.3s",
    margin: "10px", // Add margin to create space between cards
    border: "1px solid #252B48",
    color: "white",
  };

  const hoverCardStyles = {
    ...cardStyles,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    transform: "scale(0.95)", // Scale slightly on hover
  };

  const innerStyles = {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
  };

  const frontStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to top, #1A1F2E 50%, #252B48)",
    borderRadius: "10px",
    flexDirection: "column",
  };

  const backStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252B48",
    borderRadius: "10px",
    transform: "rotateY(180deg)",
    color: "white",
    padding: "10px",
    flexDirection: "column",
  };

  return (
    <div style={isFlipped ? hoverCardStyles : cardStyles} onClick={handleFlip}>
      <div style={innerStyles}>
        <div style={frontStyles}>
          {showImage && <img src={recipe.imageSrc} alt={recipe.name} width="80%" height="80%" />}
          <h3>{recipe.name}</h3>
          <p> {recipe.ingredients.join(", ")}</p>
        </div>
        <div style={backStyles}>
          <h3>Ingredientes</h3>
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
      name: "PASTA CICILIANA",
      imageSrc: receta1,
      ingredients: [
        "La pasta es un conjunto de alimentos preparados con una masa cuyo ingrediente básico es la sémola, mezclada con agua, y a la cual se puede añadir sal, huevo u otros ingredientes, conformando un producto que generalmente se cuece en agua hirviendo."
      ],
      instructions: [
        "suficiente de agua",
        "suficiente de sal",
        "1 bolsa de Pasta kids de unicornio 200g",
        "2 cucharadas de mantequilla",
        "1 1/2 tazas de crema ácida",
        "1/4 tazas de queso parmesano",
        "1/2 tazas de brócoli, ramilletes chicos, cocidos",
        "1/2 tazas de zanahoria, en cubitos, cocida",
        "1/2 tazas de chayote, en cubitos, cocido",
        "suficiente de sal",
        "suficiente de pimienta",
       "1 cucharada de perejil, finamente picado",
        "al gusto de queso parmesano"
      ],
    },
    {
      ingredients: [
        "Aprende cómo hacer churros caseros con esta receta que combina sabores muy comunes en México, una textura crujiente y un relleno suave. Estos churros rellenos de queso son más fáciles de hacer de lo que podrías creer y no te arrepentirás de prepararlos.",
      ],
      instructions: ["Step 1: Do something", "Step 2: Do something else"],
    },
    // Add more recipes as needed
  ];

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Show two columns
    gap: "10px", // Add gap between grid items
  };

  return (
    <div style={gridStyles}>
      {recipes.map((recipe, index) => (
        <Card key={index} recipe={recipe} showImage={recipe.imageSrc !== undefined} />
      ))}
    </div>
  );
}

function App() {
  const appStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  return (
    <div style={appStyles}>
      <Grid />
    </div>
  );
}

export default App;
