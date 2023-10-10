import React, { useState } from "react";
import receta1 from "../img/CoditosConRaja.png";
import receta2 from "../img/FlautasDivorciadas.png";
import receta3 from "../img/PolloNaranja.png";
import receta4 from "../img/camarones.png";
import receta5 from "../img/capeado.png";
import receta6 from "../img/hamburguesa.png";
import receta7 from "../img/pastap.jpg";
import receta8 from "../img/polloMostaza.png";

//un comentario

function Card({ recipe }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    perspective: "1000px",
    width: "1200px", // Adjust card width
    height: "600px", // Adjust card height
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
    transform: "scale(0.95)", // Scale down slightly on hover
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
          {/* Content for the front of the card */}
          <img
            src={recipe.imageSrc}
            alt={recipe.name}
            width="70%"
            height="70%"
          />
          <h3>{recipe.name}</h3>
          <p> {recipe.ingredients.join(", ")}</p>
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
      name: "CODITOS CON RAJA",
      imageSrc: receta1,
      ingredients: [
        "Una mezcla que no todos conocen, pero que es deliciosa, es la del chile poblano con pasta. Si estás pensando en qué hacer de comer para tu familia,  estos coditos con rajas les van a fascinar.",
      ],
      instructions: ["Step 1: Do something", "Step 2: Do something else"],
    },
    {
      name: "FLAUTAS DIVORCIADAS ",
      imageSrc: receta2,
      ingredients: [
        "Dentro de la comida mexicana, las flautas son hermanas de los tacos dorados de pollo, pues son muy similares, pero se preparan con unas tortillas de maíz alargadas. Se pueden rellenar con pollo, papa, res o algún guisado. Se decoran con queso, crema, lechuga y salsa.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "POLLO A LA NARANJA ",
      imageSrc: receta3,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "CAMARONES AL COCOn ",
      imageSrc: receta4,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "CHILE CAPEADO ",
      imageSrc: receta5,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "HAMBURGUESA GIGANTE ",
      imageSrc: receta6,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "PASTA PENNE ",
      imageSrc: receta7,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    {
      name: "POLLO A LA MOSTAZA ",
      imageSrc: receta8,
      ingredients: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      instructions: ["Step 1: Do another thing", "Step 2: Do one more thing"],
    },
    // Add more recipes as needed
  ];

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "1fr", // Show one card per row
    gap: "10px", // Add gap between grid items
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
