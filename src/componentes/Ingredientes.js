import React, { useState } from "react";

function Card({ name, imageSrc, frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    perspective: "1000px",
    width: "250px",
    height: "350px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.5s, box-shadow 0.3s",
    margin: "5px", // Add margin to create space between cards

    border: "1px solid #252B48", // Agrega un borde negro
  };

  const hoverCardStyles = {
    ...cardStyles,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",

    transform: "scale(0.95)",
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
    backgroundColor: "white",
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
//hola :)
function Grid() {
  const numRows = 5; // Change the number of rows
  const numCols = 5; // Change the number of columns

  const gridStyles = {
    display: "grid",
    gridTemplateRows: `repeat(${numRows}, 1fr)`, // Adjust the number of rows
    gridTemplateColumns: `repeat(${numCols}, 1fr)`, // Adjust the number of columns
    gap: "10px", // Add gap between grid items

    display: "grid",
    gridTemplateColumns: `repeat(${numCols}, 1fr)`, // Ajusta el número de columnas
    gap: "10px", // Agrega espacio entre las tarjetas
  };

  const appStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  return (
    <div style={gridStyles}>
      <Card
        name="Card 1"
        imageSrc="/img/manzana3.jpeg"
        frontContent={[
          <h1>
            <strong>MANZANA</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Frutas
            <br />
            <strong>Subtipo:</strong> Frutas frescas
            <br />
            <br />
            <strong>Descripción:</strong> Las manzanas son frutas frescas y
            crujientes que vienen en una variedad de colores y sabores. Son una
            excelente fuente de fibra y vitamina C.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las manzanas se consumen como un
            refrigerio saludable y se utilizan en la preparación de ensaladas de
            frutas y pasteles.
          </p>
        }
      />

      <Card
        name="Card 2"
        imageSrc="\img\platanos.jpeg"
        frontContent={[
          <h1>
            <strong>PLATANO</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong> Tipo:</strong> Frutas
            <br />
            <strong>Subtipo:</strong> Frutas frescas
            <br />
            <br />
            <strong>Descripción:</strong> Los plátanos son frutas dulces y ricas
            en potasio. Tienen una cáscara amarilla que se pela fácilmente.
            <br />
            <br />
            <strong>Uso Principal:</strong> Los plátanos se comen solos como un
            bocadillo o se agregan a batidos y postres.
          </p>
        }
      />
      <Card
        name="Card 3"
        imageSrc="/img/uvas.jpeg"
        frontContent={[
          <h1>
            <strong>UVAS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Frutas
            <br />
            <br />
            <strong>Subtipo:</strong> Frutas frescas
            <br />
            <br />
            <strong>Descripción:</strong> Las uvas son pequeñas frutas redondas
            que pueden ser verdes o moradas. Son jugosas y dulces.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las uvas se comen frescas como un
            bocadillo y se utilizan para hacer vino y pasas.
          </p>
        }
      />

      <Card
        name="Card 4"
        imageSrc="/img/fresas.jpeg"
        frontContent={[
          <h1>
            <strong>FRESAS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Frutas
            <br />
            <br />
            <strong>Subtipo:</strong> Frutas frescas
            <br />
            <br />
            <strong>Descripción:</strong> Las fresas son frutas rojas y jugosas
            con pequeñas semillas en la superficie. Son conocidas por su sabor
            dulce.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las fresas se comen frescas, se
            agregan a ensaladas y se utilizan en postres como pasteles y
            helados.
          </p>
        }
      />

      <Card
        name="Card 5"
        imageSrc="/img/zanahoria.jpeg"
        frontContent={[
          <h1>
            <strong>ZANAHORIAS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Verduras
            <br />
            <br />
            <strong>Subtipo:</strong> Tubérculos
            <br />
            <br />
            <strong>Descripción:</strong> Las zanahorias son raíces comestibles
            de color naranja con un sabor ligeramente dulce. Son ricas en
            betacaroteno.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las zanahorias se consumen crudas
            como bocadillo, se cocinan en sopas y guisos, y se rallan en
            ensaladas.
          </p>
        }
      />

      <Card
        name="Card 6"
        imageSrc="/img/brocoli.jpeg"
        frontContent={[
          <h1>
            <strong>BROCOLI</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Verduras
            <br />
            <br />
            <strong>Subtipo:</strong> Crucíferas
            <br />
            <br />
            <strong>Descripción:</strong> El brócoli es una verdura de color
            verde que tiene floretes comestibles y tallos. Es rico en vitaminas
            y antioxidantes.
            <br />
            <br />
            <strong>Uso Principal:</strong> El brócoli se cocina al vapor, se
            asa o se agrega a ensaladas y platos salteados.
          </p>
        }
      />

      <Card
        name="Card 7"
        imageSrc="/img/espinacas.jpeg"
        frontContent={[
          <h1>
            <strong>ESPINACAS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Verduras
            <br />
            <br />
            <strong>Subtipo:</strong> Hojas verdes
            <br />
            <br />
            <strong>Descripción:</strong> Las espinacas son hojas verdes de
            color oscuro que son ricas en hierro y otros nutrientes esenciales.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las espinacas se utilizan en
            ensaladas, se cocinan al vapor, se agregan a batidos y se usan en
            platos de pasta.
          </p>
        }
      />

      <Card
        name="Card 8"
        imageSrc="/img/tomate.jpeg"
        frontContent={[
          <h1>
            <strong>TOMATES</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Verduras
            <br />
            <br />
            <strong>Subtipo:</strong> Frutas frescas
            <br />
            <br />
            <strong>Descripción:</strong> Los tomates son frutas frescas de
            color rojo o amarillo que se utilizan comúnmente en la cocina.
            Tienen un sabor ácido y dulce.
            <br />
            <br />
            <strong>Uso Principal:</strong> Los tomates se utilizan en salsas,
            ensaladas, sándwiches y como base para muchas recetas.
          </p>
        }
      />

      <Card
        name="Card 9"
        imageSrc="/img/pimientos.jpeg"
        frontContent={[
          <h1>
            <strong>PIMIENTOS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Verduras
            <br />
            <br />
            <strong>Subtipo:</strong> Capsicum
            <br />
            <br />
            <strong>Descripción:</strong> Los pimientos son vegetales de colores
            variados (rojos, verdes, amarillos) que tienen un sabor suave y
            crujiente.
            <br />
            <br />
            <strong>Uso Principal:</strong> Los pimientos se utilizan en
            ensaladas, se rellenan, se asan y se agregan a platos salteados.
          </p>
        }
      />

      <Card
        name="Card 10"
        imageSrc="/img/pollo.jpeg"
        frontContent={[
          <h1>
            <strong>POLLO</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Proteínas
            <br />
            <br />
            <strong>Subtipo:</strong> Aves
            <br />
            <br />
            <strong>Descripción:</strong> El pollo es una carne magra y blanca
            que es versátil y baja en grasa. Puede prepararse de muchas maneras.
            <br />
            <br />
            <strong>Uso Principal:</strong> El pollo se asa, se cocina a la
            parrilla, se hierve, se guisa y se usa en una variedad de platos.
          </p>
        }
      />

      <Card
        name="Card 11"
        imageSrc="/img/pavo.jpeg"
        frontContent={[
          <h1>
            <strong>PAVO</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Proteínas
            <br />
            <br />
            <strong>Subtipo:</strong> Aves
            <br />
            <br />
            <strong>Descripción:</strong> El pavo es una carne magra y saludable
            que es una alternativa más baja en grasa que el pollo.
            <br />
            <br />
            <strong>Uso Principal:</strong> El pavo se consume en asados,
            sándwiches, y como relleno en festividades.
          </p>
        }
      />

      <Card
        name="Card 12"
        imageSrc="/img/salmon.jpeg"
        frontContent={[
          <h1>
            <strong>SALMON</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Proteínas
            <br />
            <br />
            <strong>Subtipo:</strong> Pescado
            <br />
            <br />
            <strong>Descripción:</strong> El salmón es un pescado graso rico en
            ácidos grasos omega-3 y proteínas.
            <br />
            <br />
            <strong>Uso Principal:</strong> El salmón se cocina a la parrilla,
            se hornea y se consume para obtener beneficios para la salud del
            corazón.
          </p>
        }
      />

      <Card
        name="Card 13"
        imageSrc="/img/atun.jpeg"
        frontContent={[
          <h1>
            <strong>ATUN</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Proteínas
            <br />
            <br />
            <strong>Subtipo:</strong> Pescado
            <br />
            <br />
            <strong>Descripción:</strong> El atún es un pescado enlatado
            ampliamente consumido que es una buena fuente de proteínas y ácidos
            grasos omega-3.
            <br />
            <br />
            <strong>Uso Principal:</strong> El atún se usa en ensaladas,
            sándwiches y platos de pasta.
          </p>
        }
      />

      <Card
        name="Card 14"
        imageSrc="/img/lentejas.jpeg"
        frontContent={[
          <h1>
            <strong>LENTEJAS</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Legumbres
            <br />
            <br />
            <strong>Subtipo:</strong> Leguminosas
            <br />
            <br />
            <strong>Descripción:</strong> Las lentejas son legumbres pequeñas y
            redondas que son ricas en proteínas y fibra.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las lentejas se cocinan en sopas,
            guisos y se utilizan en platos vegetarianos.
          </p>
        }
      />

      <Card
        name="Card 15"
        imageSrc="/img/arrozblanco.jpeg"
        frontContent={[
          <h1>
            <strong>ARROZ INTEGRAL</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Granos
            <br />
            <br />
            <strong>Subtipo:</strong> Granos enteros
            <br />
            <br />
            <strong>Descripción:</strong> El arroz integral es arroz no
            procesado con cáscara, lo que lo hace más nutritivo que el arroz
            blanco.
            <br />
            <br />
            <strong>Uso Principal:</strong> El arroz integral se cocina y se
            sirve como acompañamiento en platos principales.
          </p>
        }
      />

      <Card
        name="Card 16"
        imageSrc="/img/quinoa1.jpeg"
        frontContent={[
          <h1>
            <strong>QUINOA</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Granos
            <br />
            <br />
            <strong>Subtipo:</strong> Granos enteros
            <br />
            <br />
            <strong>Descripción:</strong> La quinua es un pseudocereal que es
            rica en proteínas y contiene todos los aminoácidos esenciales.
            <br />
            <br />
            <strong>Uso Principal:</strong> La quinua se utiliza como sustituto
            de granos en ensaladas y platos principales.
          </p>
        }
      />

      <Card
        name="Card 17"
        imageSrc="/img/yogurt.jpeg"
        frontContent={[
          <h1>
            <strong>YOGUR</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Productos lácteos
            <br />
            <br />
            <strong>Subtipo:</strong> Lácteos fermentados
            <br />
            <br />
            <strong>Descripción:</strong> El yogur es un producto lácteo que
            contiene bacterias probióticas y es una fuente de calcio y
            proteínas.
            <br />
            <br />
            <strong>Uso Principal:</strong> El yogur se consume solo o se mezcla
            con frutas y miel como postre o desayuno.
          </p>
        }
      />

      <Card
        name="Card 18"
        imageSrc="/img/leche.jpeg"
        frontContent={[
          <h1>
            <strong>LECHE</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Productos lácteos
            <br />
            <br />
            <strong>Subtipo:</strong> Lácteos
            <br />
            <br />
            <strong>Descripción:</strong> La leche es una fuente importante de
            calcio y vitamina D en la dieta.
            <br />
            <br />
            <strong>Uso Principal:</strong> La leche se bebe sola o se utiliza
            en la preparación de cereales y bebidas.
          </p>
        }
      />

      <Card
        name="Card 19"
        imageSrc="/img/queso.jpeg"
        frontContent={[
          <h1>
            <strong>QUESO</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Productos lácteos
            <br />
            <br />
            <strong>Subtipo:</strong> Lácteos
            <br />
            <br />
            <strong>Descripción:</strong> El queso es un producto lácteo
            elaborado a partir de leche que varía en sabor y textura según el
            tipo.
            <br />
            <br />
            <strong>Uso Principal:</strong> El queso se utiliza como aperitivo,
            en sándwiches, pizzas y platos de pasta.
          </p>
        }
      />

      <Card
        name="Card 20"
        imageSrc="/img/huevo.jpeg"
        frontContent={[
          <h1>
            <strong>HUEVO</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Proteínas
            <br />
            <br />
            <strong>Subtipo:</strong> Huevos
            <br />
            <br />
            <strong>Descripción:</strong> Los huevos son una excelente fuente de
            proteínas y se pueden cocinar de diversas maneras.
            <br />
            <br />
            <strong>Uso Principal:</strong> Los huevos se cocinan al gusto, ya
            sea en revuelto, hervidos, fritos o en tortillas.
          </p>
        }
      />

      <Card
        name="Card 21"
        imageSrc="/img/pan integral.jpeg"
        frontContent={[
          <h1>
            <strong>PAN INTEGRAL</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Granos
            <br />
            <br />
            <strong>Subtipo:</strong> Panes
            <br />
            <br />
            <strong>Descripción:</strong> El pan integral está hecho de harina
            de grano entero y es más nutritivo que el pan blanco.
            <br />
            <br />
            <strong>Uso Principal:</strong> El pan integral se utiliza para
            hacer sándwiches y se sirve como acompañamiento en comidas.
          </p>
        }
      />

      <Card
        name="Card 22"
        imageSrc="/img/avena.jpeg"
        frontContent={[
          <h1>
            <strong>AVENA</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Granos
            <br />
            <br />
            <strong>Subtipo:</strong> Granos enteros
            <br />
            <br />
            <strong>Descripción:</strong> La avena es un cereal saludable y
            versátil que es rico en fibra y nutrientes.
            <br />
            <br />
            <strong>Uso Principal:</strong> La avena se prepara como cereal
            caliente, se usa en batidos y se agrega a recetas de hornear.
          </p>
        }
      />

      <Card
        name="Card 23"
        imageSrc="/img/nueces.jpeg"
        frontContent={[
          <h1>
            <strong>NUECES</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Frutas secas
            <br />
            <br />
            <strong>Subtipo:</strong> Frutos secos
            <br />
            <br />
            <strong>Descripción:</strong> Las nueces son frutos secos ricos en
            grasas saludables, proteínas y antioxidantes.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las nueces se consumen como
            aperitivo o se agregan a ensaladas y postres.
          </p>
        }
      />

      <Card
        name="Card 24"
        imageSrc="/img/almendra.jpeg"
        frontContent={[
          <h1>
            <strong>ALMENDRA</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Frutas secas
            <br />
            <br />
            <strong>Subtipo:</strong> Frutos secos
            <br />
            <br />
            <strong>Descripción:</strong> Las almendras son frutos secos que son
            una fuente de grasas saludables y proteínas.
            <br />
            <br />
            <strong>Uso Principal:</strong> Las almendras se consumen como
            bocadillo o se usan en la preparación de leche de almendras.
          </p>
        }
      />

      <Card
        name="Card 25"
        imageSrc="/img/aceite oliva.jpeg"
        frontContent={[
          <h1>
            <strong>ACEITE DE OLIVA</strong>
          </h1>,
        ]}
        backContent={
          <p>
            <strong>Tipo:</strong> Grasas saludables
            <br />
            <br />
            <strong>Subtipo:</strong> Aceites
            <br />
            <br />
            <strong>Descripción:</strong> El aceite de oliva es un aceite
            vegetal extraído de las aceitunas y es una grasa saludable para
            cocinar.
            <br />
            <br />
            <strong>Uso Principal:</strong> El aceite de oliva se utiliza para
            cocinar, aderezar ensaladas y preparar salsas.
          </p>
        }
      />
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
