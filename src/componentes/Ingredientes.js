import React, { useState } from 'react';

function Card({ name, imageSrc, frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    perspective: '1000px',
    width: '200px',
    height: '300px',
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
    <div
      style={isFlipped ? hoverCardStyles : cardStyles}
      onClick={handleFlip}
    >
      <div style={innerStyles}>
        <div style={frontStyles}>
          {/* Content for the front of the card */}
          <img src={imageSrc} alt={name} width="80%" height="80%" />
          <p>{frontContent}</p>
        </div>
        <div style={backStyles}>
          {/* Content for the back of the card */}
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  const numRows = 5; // Change the number of rows
  const numCols = 5; // Change the number of columns

  const gridStyles = {
    display: 'grid',
    gridTemplateRows: `repeat(${numRows}, 1fr)`, // Adjust the number of rows
    gridTemplateColumns: `repeat(${numCols}, 1fr)`, // Adjust the number of columns
    gap: '10px', // Add gap between grid items
  };

  return (
    <div style={gridStyles}>
      <Card
        name="Card 1"
        imageSrc="/img/manzana3.jpeg"
        frontContent="MANZANA"
        backContent="Tipo: Frutas 
        Subtipo: Frutas frescas 
        Descripción: Las manzanas son frutas frescas y crujientes que vienen en una variedad de colores y sabores. Son una excelente fuente de fibra y vitamina C. 
        Uso Principal: Las manzanas se consumen como un refrigerio saludable y se utilizan en la preparación de ensaladas de frutas y pasteles." 
      />
      <Card
        name="Card 2"
        imageSrc="\img\platanos.jpeg"
        frontContent="PLATANO"
        backContent="Tipo: Frutas
        Subtipo: Frutas frescas
        Descripción: Los plátanos son frutas dulces y ricas en potasio. Tienen una cáscara amarilla que se pela fácilmente.
        Uso Principal: Los plátanos se comen solos como un bocadillo o se agregan a batidos y postres."
      />
      <Card
        name="Card 3"
        imageSrc="\img\uvas.jpeg"
        frontContent="UVAS"
        backContent="Tipo: Frutas
        Subtipo: Frutas frescas
        Descripción: Las uvas son pequeñas frutas redondas que pueden ser verdes o moradas. Son jugosas y dulces.
        Uso Principal: Las uvas se comen frescas como un bocadillo y se utilizan para hacer vino y pasas."
      />
      <Card
        name="Card 4"
        imageSrc="\img\fresas.jpeg"
        frontContent="FRESAS"
        backContent="Tipo: Frutas
        Subtipo: Frutas frescas
        Descripción: Las fresas son frutas rojas y jugosas con pequeñas semillas en la superficie. Son conocidas por su sabor dulce.
        Uso Principal: Las fresas se comen frescas, se agregan a ensaladas y se utilizan en postres como pasteles y helados."
      />
      <Card
        name="Card 5"
        imageSrc="\img\zanahoria.jpeg"
        frontContent="ZANAHORIAS"
        backContent="Tipo: Verduras
        Subtipo: Tubérculos
        Descripción: Las zanahorias son raíces comestibles de color naranja con un sabor ligeramente dulce. Son ricas en betacaroteno.
        Uso Principal: Las zanahorias se consumen crudas como bocadillo, se cocinan en sopas y guisos, y se rallan en ensaladas."
      />
      <Card
        name="Card 6"
        imageSrc="\img\brocoli.jpeg"
        frontContent="BROCOLI"
        backContent="Tipo: Verduras
        Subtipo: Crucíferas
        Descripción: El brócoli es una verdura de color verde que tiene floretes comestibles y tallos. Es rico en vitaminas y antioxidantes.
        Uso Principal: El brócoli se cocina al vapor, se asa o se agrega a ensaladas y platos salteados."
      />
      <Card
        name="Card 7"
        imageSrc="\img\espinacas.jpeg"
        frontContent="ESPINACAS"
        backContent="Tipo: Verduras
        Subtipo: Hojas verdes
        Descripción: Las espinacas son hojas verdes de color oscuro que son ricas en hierro y otros nutrientes esenciales.
        Uso Principal: Las espinacas se utilizan en ensaladas, se cocinan al vapor, se agregan a batidos y se usan en platos de pasta."
      />
      <Card
        name="Card 8"
        imageSrc="\img\tomate.jpeg"
        frontContent="TOMATES"
        backContent="Tipo: Verduras
        Subtipo: Frutas frescas
        Descripción: Los tomates son frutas frescas de color rojo o amarillo que se utilizan comúnmente en la cocina. Tienen un sabor ácido y dulce.
        Uso Principal: Los tomates se utilizan en salsas, ensaladas, sándwiches y como base para muchas recetas."
      />
      <Card
        name="Card 9"
        imageSrc="\img\pimientos.jpeg"
        frontContent="PIMIENTO"
        backContent="Tipo: Verduras
        Subtipo: Capsicum
        Descripción: Los pimientos son vegetales de colores variados (rojos, verdes, amarillos) que tienen un sabor suave y crujiente.
        Uso Principal: Los pimientos se utilizan en ensaladas, se rellenan, se asan y se agregan a platos salteados."
      />
      <Card
        name="Card 10"
        imageSrc="\img\pollo.jpeg"
        frontContent="POLLO"
        backContent="Tipo: Proteínas
        Subtipo: Aves
        Descripción: El pollo es una carne magra y blanca que es versátil y baja en grasa. Puede prepararse de muchas maneras.
        Uso Principal: El pollo se asa, se cocina a la parrilla, se hierve, se guisa y se usa en una variedad de platos."
      />
      <Card
        name="Card 11"
        imageSrc="\img\pavo.jpeg"
        frontContent="PAVO"
        backContent="Tipo: Proteínas
        Subtipo: Aves
        Descripción: El pavo es una carne magra y saludable que es una alternativa más baja en grasa que el pollo.
        Uso Principal: El pavo se consume en asados, sándwiches, y como relleno en festividades."
      />
      <Card
        name="Card 12"
        imageSrc="\img\salmon.jpeg"
        frontContent="SALMON"
        backContent="Tipo: Proteínas
        Subtipo: Pescado
        Descripción: El salmón es un pescado graso rico en ácidos grasos omega-3 y proteínas.
        Uso Principal: El salmón se cocina a la parrilla, se hornea y se consume para obtener beneficios para la salud del corazón."
      />
      <Card
        name="Card 13"
        imageSrc="\img\atun.jpeg"
        frontContent="ATUN"
        backContent="Tipo: Proteínas
        Subtipo: Pescado
        Descripción: El atún es un pescado enlatado ampliamente consumido que es una buena fuente de proteínas y ácidos grasos omega-3.
        Uso Principal: El atún se usa en ensaladas, sándwiches y platos de pasta."
      />
      <Card
        name="Card 14"
        imageSrc="\img\lentejas.jpeg"
        frontContent="LENTEJAS"
        backContent="Tipo: Legumbres
        Subtipo: Leguminosas
        Descripción: Las lentejas son legumbres pequeñas y redondas que son ricas en proteínas y fibra.
        Uso Principal: Las lentejas se cocinan en sopas, guisos y se utilizan en platos vegetarianos."
      />
      <Card
        name="Card 15"
        imageSrc="\img\arrozblanco.jpeg"
        frontContent="ARROZ INTEGRAL"
        backContent="Tipo: Granos
        Subtipo: Granos enteros
        Descripción: El arroz integral es arroz no procesado con cáscara, lo que lo hace más nutritivo que el arroz blanco.
        Uso Principal: El arroz integral se cocina y se sirve como acompañamiento en platos principales."
      />
      

      <Card
        name="Card 16"
        imageSrc="\img\quinoa1.jpeg"
        frontContent="QUINOA"
        backContent="Tipo: Granos
        Subtipo: Granos enteros
        Descripción: La quinua es un pseudocereal que es rica en proteínas y contiene todos los aminoácidos esenciales.
        Uso Principal: La quinua se utiliza como sustituto de granos en ensaladas y platos principales."
      />
      <Card
        name="Card 17"
        imageSrc="\img\yogurt.jpeg"
        frontContent="YOGUR"
        backContent="Tipo: Productos lácteos
        Subtipo: Lácteos fermentados
        Descripción: El yogur es un producto lácteo que contiene bacterias probióticas y es una fuente de calcio y proteínas.
        Uso Principal: El yogur se consume solo o se mezcla con frutas y miel como postre o desayuno."
      />
      <Card
        name="Card 18"
        imageSrc="\img\leche.jpeg"
        frontContent="LECHE"
        backContent="Tipo: Productos lácteos
        Subtipo: Lácteos
        Descripción: La leche es una fuente importante de calcio y vitamina D en la dieta.
        Uso Principal: La leche se bebe sola o se utiliza en la preparación de cereales y bebidas."
      />
      <Card
        name="Card 19"
        imageSrc="\img\queso.jpeg"
        frontContent="QUESO"
        backContent="Tipo: Productos lácteos
        Subtipo: Lácteos
        Descripción: El queso es un producto lácteo elaborado a partir de leche que varía en sabor y textura según el tipo.
        Uso Principal: El queso se utiliza como aperitivo, en sándwiches, pizzas y platos de pasta."
      />
      <Card
        name="Card 20"
        imageSrc="\img\huevo.jpeg"
        frontContent="HUEVO"
        backContent="Tipo: Proteínas
        Subtipo: Huevos
        Descripción: Los huevos son una excelente fuente de proteínas y se pueden cocinar de diversas maneras.
        Uso Principal: Los huevos se cocinan al gusto, ya sea en revuelto, hervidos, fritos o en tortillas."
      />
      <Card
        name="Card 21"
        imageSrc="\img\pan integral.jpeg"
        frontContent="PAN INTEGRAL"
        backContent="Tipo: Granos
        Subtipo: Panes
        Descripción: El pan integral está hecho de harina de grano entero y es más nutritivo que el pan blanco.
        Uso Principal: El pan integral se utiliza para hacer sándwiches y se sirve como acompañamiento en comidas."
      />
      <Card
        name="Card 22"
        imageSrc="\img\avena.jpeg"
        frontContent="AVENA"
        backContent="Tipo: Granos
        Subtipo: Granos enteros
        Descripción: La avena es un cereal saludable y versátil que es rico en fibra y nutrientes.
        Uso Principal: La avena se prepara como cereal caliente, se usa en batidos y se agrega a recetas de hornear."
      />
      <Card
        name="Card 23"
        imageSrc="\img\nueces.jpeg"
        frontContent="NUECES"
        backContent="Tipo: Frutas secas
        Subtipo: Frutos secos
        Descripción: Las nueces son frutos secos ricos en grasas saludables, proteínas y antioxidantes.
        Uso Principal: Las nueces se consumen como aperitivo o se agregan a ensaladas y postres."
      />
      <Card
        name="Card 24"
        imageSrc="\img\almendra.jpeg"
        frontContent="ALMENDRA"
        backContent="Tipo: Frutas secas
        Subtipo: Frutos secos
        Descripción: Las almendras son frutos secos que son una fuente de grasas saludables y proteínas.
        Uso Principal: Las almendras se consumen como bocadillo o se usan en la preparación de leche de almendras."
      />
      <Card
        name="Card 25"
        imageSrc="\img\aceite oliva.jpeg"
        frontContent="ACEITE DE OLIVA"
        backContent="Tipo: Grasas saludables
        Subtipo: Aceites
        Descripción: El aceite de oliva es un aceite vegetal extraído de las aceitunas y es una grasa saludable para cocinar.
        Uso Principal: El aceite de oliva se utiliza para cocinar, aderezar ensaladas y preparar salsas."
      />
      {/* Add more Card components with different information */}
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
