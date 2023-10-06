import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from '../img/imagen1.png';
import imagen2 from '../img/imagen2.png';
import tacos from '../img/tacosgt.jpg';

import './styles.css';
import RecetaCard from './RecetaCard';

const imageContainerStyle = {
  maxWidth: '100%',
  height: '250px',
  objectFit: 'cover',
};

const recetaDestacada1 = {
  id: 1,
  nombre: 'Tacos Chapines',
  descripcion: 'Deliciosos y fáciles de hacer',
  imagenSrc: tacos,
};

const welcomeTextStyle = {
  fontSize: '36px',
  textAlign: 'center',
  padding: '20px',
  transition: 'color 0.3s ease-in-out',
  background: 'rgba(0, 0, 0, 0.5)', // Fondo con transparencia
  color: '#fff', // Color del texto
};


function Inicio() {
  return (
    <div className="home-page">
      <header>
        <h1 style={welcomeTextStyle}>BIENVENIDO A LA COCINA CREATIVA</h1>
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
          <button className="button">Explora Recetas</button>
        </Link>
      </header>

      <section className="featured-recipes">
        <h2>Recetas Destacadas</h2>
        <div className="receta-cards">
          <RecetaCard receta={recetaDestacada1} />
        </div>
      </section>

      <section className="popular-recipes">
        <h2>Recetas Populares</h2>
        {/* 
          Aquí puedes mostrar imágenes y enlaces a recetas populares.
          Puedes usar componentes de tarjeta (Card) para mostrar las recetas.
          Por ejemplo, puedes crear una lista de tarjetas de recetas.
        */}
      </section>

      <section className="newsletter">
        <h2>¡Suscríbete a nuestro boletín!</h2>
        <p>Recibe las últimas recetas y consejos directamente en tu correo.</p>
        <input type="email" placeholder="Tu correo electrónico" />
        <button className="cta-button">Suscribirse</button>
      </section>

      <section className="testimonials">
        <h2>Lo que dicen nuestros usuarios</h2>
        {/* 
          Aquí puedes mostrar testimonios de usuarios.
          Por ejemplo, puedes crear una lista de testimonios.
        */}
      </section>
    </div>
  );
}

export default Inicio;
