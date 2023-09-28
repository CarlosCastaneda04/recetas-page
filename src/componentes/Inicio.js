import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from '../img/imagen1.png';
import imagen2 from '../img/imagen2.png';

const imageContainerStyle = {
  maxWidth: '100%', /* Ajusta el ancho máximo al 100% para que las imágenes no se desborden */
  height: '250px', /* Permite que la altura se ajuste automáticamente según el ancho */
  objectFit: 'cover', /* Recorta y mantiene la relación de aspecto */
};

function Inicio() {
  return (
    <div className="home-page">
      <header>
        <h1>Bienvenido a La Cocina Creativa</h1>
        <section className="carousel-section">
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={60}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <div style={imageContainerStyle}>
                <img src={imagen1} alt="Descripción de la imagen 1" />
              </div>
            </div>
            <div>
              <div style={imageContainerStyle}>
                <img src={imagen2} alt="Descripción de la imagen 2" />
              </div>
            </div>
            {/* Agrega más diapositivas según sea necesario */}
          </Carousel>
          <h2>Descubre Nuestras Recetas</h2>
        </section>
        <p>Explora recetas deliciosas y sorprende a tu paladar.</p>
        <Link to="/recetas">
          <button className="cta-button">Explora Recetas</button>
        </Link>
      </header>

      <section className="featured-recipes">
        <h2>Recetas Destacadas</h2>
        {/* Aquí puedes mostrar imágenes y enlaces a recetas destacadas */}
      </section>

      <section className="popular-recipes">
        <h2>Recetas Populares</h2>
        {/* Aquí puedes mostrar imágenes y enlaces a recetas populares */}
      </section>

      <section className="newsletter">
        <h2>¡Suscríbete a nuestro boletín!</h2>
        <p>Recibe las últimas recetas y consejos directamente en tu correo.</p>
        <input type="email" placeholder="Tu correo electrónico" />
        <button className="cta-button">Suscribirse</button>
      </section>

      <section className="testimonials">
        <h2>Lo que dicen nuestros usuarios</h2>
        {/* Aquí puedes mostrar testimonios de usuarios */}
      </section>
    </div>
  );
}

export default Inicio;
