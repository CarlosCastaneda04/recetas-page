import React from 'react';
import './styles.css';
import fondoGif from '../img/fondo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SobreNosotros() {
  const backgroundStyle = {
    backgroundImage: `url(${fondoGif})`, // Usa el GIF como fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="sobre-nosotros-container" style={backgroundStyle}>
      <div className="sobre-nosotros-content">
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a La Cocina Creativa, tu fuente de inspiración culinaria.
          Somos un equipo apasionado por la comida y la cocina. Nuestra misión es
          compartir recetas deliciosas y creativas que te permitan explorar nuevos
          sabores y sorprender a tu paladar.
        </p>
        <p>
          En La Cocina Creativa, encontrarás una amplia variedad de recetas,
          desde platos tradicionales hasta opciones innovadoras para todas las
          ocasiones. Nuestro objetivo es brindarte consejos útiles, técnicas de
          cocina y, por supuesto, recetas deliciosas que puedas preparar en casa.
        </p>
        <p>
          Nos enorgullece ofrecer contenido de calidad que te inspire a cocinar y
          experimentar en la cocina. ¡Esperamos que disfrutes explorando nuestras
          recetas y que te animes a compartir tus propias creaciones con nosotros!
        </p>

        {/* Elementos adicionales */}
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>
            ¿Tienes preguntas o sugerencias? No dudes en contactarnos a través de
            nuestro correo electrónico: <a href="mailto:info@lacocinacreativa.com">info@lacocinacreativa.com</a>
          </p>
        </div>

        <div className="follow-us">
    <h3>Síguenos en Redes Sociales</h3>
    {/* Agrega enlaces a tus redes sociales */}
    <div className="social-icons">
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 La Cocina Creativa</p>
      </footer>
    </div>
  );
}

export default SobreNosotros;
