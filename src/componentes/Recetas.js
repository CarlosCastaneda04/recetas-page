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
      instructions: [
        "En una cacerola a fuego medio calienta el agua y, una vez que comience a hervir, agrega la pasta de codito y cocina por 8 minutos o te recomendamos leer bien las instrucciones del paquete. Escurre y reserva.", 
        "En un sartén hondo y caliente, derrite la mantequilla, después agrega el ajo y la cebolla y cocina hasta que estén transparentes. Enseguida añade las rajas junto con el elote amarillo, sofríe y sazona con sal y pimienta.",
        "Revuelve perfectamente y cocina durante 5 minutos, posteriormente agrega la crema y el queso mozzarella, mezcla uniformemente, tapa y cocina hasta que el queso se derrita, rectifica sazón, retira del fuego.",
        "Sirve en un plato, decora con perejil. Esta pasta se puede comer al tiempo o caliente, dependiendo de los gustos de tu familia, y te recomendamos acompañarla con un vaso de Del Valle Frut® Cítricos."],
    },
    {
      name: "FLAUTAS DIVORCIADAS ",
      imageSrc: receta2,
      ingredients: [
        "Dentro de la comida mexicana, las flautas son hermanas de los tacos dorados de pollo, pues son muy similares, pero se preparan con unas tortillas de maíz alargadas. Se pueden rellenar con pollo, papa, res o algún guisado. Se decoran con queso, crema, lechuga y salsa.",
      ],
      instructions: ["Calienta el aceite en una sartén a fuego medio. Agrega la cebolla y el ajo y dora por 5 minutos. Añade el jitomate y la carne, sazona con Sal con Pimienta McCormick® y cocina por 5 minutos más. Reserva.",
       "Rellena las tortillas para flauta con un poco del relleno de carne de res. Enrolla y coloca un palillo para cerrar bien. Repite hasta terminar con las tortillas y el relleno y reserva.",
      "Calienta suficiente aceite vegetal en una sartén a fuego medio. Fríe las flautas de 5 a 8 minutos o hasta que estén doradas. Retira y coloca en un palto con papel absorbente.",
      "Para la salsa roja: licúa el jitomate, la cebolla, el ajo, el chile de árbol, el caldo de pollo y la Sal con Pimienta McCormick® por 5 minutos y reserva.",
      "Para la salsa verde: licúa el tomate verde, la cebolla, el ajo, el chile serrano, el cilantro, el caldo de pollo y la Sal con Pimienta McCormick® por 5 minutos. Reserva.",
      "Sirve las flautas, baña la mitad con salsa roja y la otra mitad con salsa verde. Decora con lechuga, crema y queso."],
    },
    {
      name: "POLLO A LA NARANJA ",
      imageSrc: receta3,
      ingredients: [
        "El pollo a la naranja es una receta que, además de deliciosa, es muy rápida de preparar. Si no tienes tiempo y deseas consentir a tu familia, te recomendamos esta práctica receta de pollo a la naranja de sólo 4 pasos que le gustará a chicos y grandes."
      ],
      instructions: ["En un bowl, mezcla la mermelada de naranja, con el vinagre balsámico, el ajo, la mostaza y la sal de apio. Integra todo hasta tener una preparación homogénea.",
       "En un sartén, calienta la mantequilla, agrega las pechugas y sazónalas con sal y pimienta. Sella la carne de las pechugas por ambos lados durante 3 minutos o bien hasta que queden ligeramente doraditas.",
      "Vierte la mezcla de naranja que previamente hiciste sobre las pechugas, agrega romero, las rodajas de naranja y tapa; cocina por 15 minutos a fuego bajo",
      "Sirve acompañado de pan con mantequilla o tortillas calientitas y disfruta con el inigualable sabor de Del Valle Frut® Cítricos. ¡Una comida perfecta para toda tu familia!"],
    },
    {
      name: "TACO DE CAMARONES AL COCO ",
      imageSrc: receta4,
      ingredients: [
        "Cocinar es todo un arte, pues mezclamos todo tipo de sabores e ingredientes para crear increíbles platillos para deleitarnos. El ejemplo perfecto de una gran fusión de sabores es esta receta de tacos de camarón al coco, pues combinan especias, camarón, coco rallado y la Lechuga hidropónica"
      ],
      instructions: ["Mezcla la harina, la sal, la pimienta y la paprika en un bowl y reserva. En otro bowl, mezcla el panko y el coco rallado y reserva.",
       "Coloca en línea la harina, el huevo y el panko. Primero pasa los camarones por la harina, después por el huevo y, por último, por el panko con coco. Fríe los camarones en aceite a temperatura media-alta durante 3 minutos o hasta que estén bien cocidos.",
      "En una sartén con un poco de aceite, saltea los pimientos y la cebolla morada, sazona con sal; Agrega los camarones al coco y saltea por un minuto más. Reserva.",
      "Sirve los camarones al coco sobre la Lechuga Hidropónica."],
    },
    {
      name: "CHILE CAPEADO ",
      imageSrc: receta5,
      ingredients: [
        "El chile relleno capeado es un platillo muy conocido dentro de la cocina mexicana, así que no puede faltar en tu mesa. Sin embargo, prepararlos es un arte que se debe practicar y con los consejos que te vamos a dar hoy, lo vas a dominar fácilmente."
      ],
      instructions: [
        "Licúa los jitomates, la cebolla, el diente de ajo, el caldo de pollo, la sal y la pimienta hasta que todos los ingredientes estén bien molidos.",
        "Calienta un poco de Aceite Gran Tradición® en una olla, vierte el caldillo y cocina durante 5 minutos. Agrega los chiles capeados y cocina por 2 minutos más. Recuerda que el Aceite Gran Tradición® te ayudará a conservar el sabor original de la salsa, pues tu sazón quedará intacta.",
        "Sirve los chiles rellenos capeados con caldillo de jitomate y acompaña con arroz rojo.",
        "Rellena los chiles poblanos con los frijoles y el queso, cierra con un palillo y pasa por harina, cerciorándote de cubrirlos en su totalidad. Reserva.",
        "Utiliza una batidora de mano para montar las claras hasta que doblen su tamaño y estén firmes. Agrega las yemas poco a poco, hasta integrar. Pasa los chiles enharinados por el capeado.",
        "Calienta suficiente Aceite Gran Tradición® en una sartén a temperatura media. Coloca los chiles capados y cocina durante 3 minutos de cada lado o hasta que estén dorados. Escurre y reserva."
      ],
    },
    {
      name: "HAMBURGUESA GIGANTE ",
      imageSrc: receta6,
      ingredients: [
        "Para ese antojo voraz, te compartimos esta espectacular receta de hamburguesa gigante, la cual está elaborada con la mejor selección de Picaña de cerdo Proan, diferentes quesos y papas fritas, ¡no olvides acompañar con aros de cebolla!"
      ],
      instructions: [
        "En un bowl, agrega los ingredientes del rub y mezcla hasta integrar.",
        "Corta ligeramente la picaña del lado de la grasa, coloca un poco de acieite, unta el rub a la Picaña de cerdo Proan® por ambos lados y deja reposar por 15 minutos.",
        "Sella la carne en el asador a fuego directo por 10 minutos de cada lado. Cocina a fuego indirecto por 2 horas.",
        "Utiliza una brocha para barnizar la carne con la salsa BBQ, agrega los quesos y cocina por 5 minutos más. Retira del fuego y reserva.",
        "Calienta el pan de hamburguesa hasta que esté dorado de ambos lados. Reserva.",
        "Corta una parte del pan de hamburguesa con ayuda de un cortador de 10 cm de diámetro.",
        "Unta uno de los panes con la mayonesa, coloca la carne con los quesos, añade el tocino frito y agrega la tapa de la hamburguesa. Sobre el corte que realizaste, añade las papas fritas.",
        "Sirve la hamburguesa gigante con aros de cebolla y ensalada de col."

      ],
    },
    {
      name: "PASTA PENNE ",
      imageSrc: receta7,
      ingredients: [
        "Penne es quizá el corte de pasta más famoso, conocido por todos; este corte recibe su nombre por tener la forma de una pluma fuente. Por su forma tubular es ideal para servirse con vegetales y en platillos horneados con queso y salsa."
      ],
      instructions: [
        "Para la salsa, licua la Media Crema NESTLÉ® con la sal con cebolla en polvo, el agua y los champiñones.",
        "Calienta la salsa a fuego bajo hasta que espese un poco, moviendo constantemente para evitar que se pegue.",
        "Baña la pasta previamente cocida, con la salsa y sirve."
      ],
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
