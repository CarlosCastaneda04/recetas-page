import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/cocinacreativa.png'; // Importa la ruta de la imagen de tu logotipo

const StyledNavbar = styled.nav`
  background-color: #252B48;
  color: #fff;
  padding: 20px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100px; /* Ajusta el tamaño de tu logotipo según tus preferencias */
  height: auto;
  margin-right: 10px; /* Espacio entre el logotipo y el nombre del sitio */
`;

const SalonName = styled.h1`
  font-size: 28px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  align-items: center;

  li {
    position: relative; /* Importante para el submenú */
    a {
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #e8706e; 
      }
    }
    ul {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #252B48; /* Color de fondo del submenú */
      display: none;
      flex-direction: column;
      z-index: 1;

      li {
        a {
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          display: block;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #e8706e; /* Color destacado al pasar el ratón */
          }
        }
      }
    }

    &:hover ul {
      display: block; /* Mostrar el submenú cuando se pasa el cursor */
    }
  }
`;

const MenuIcon = styled.div`
  display: none; /* Ocultar el icono en pantallas grandes */
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNavbar>
      <NavContainer>
        <LogoContainer>
          {/* Agregamos un enlace al logo que lleva al inicio */}
          <Link to="/">
            <LogoImage src={Logo} alt="Logo de La Cocina Creativa" />
          </Link>
          <SalonName>La Cocina Creativa</SalonName>
        </LogoContainer>
        <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        <NavLinks>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/recetas">Recetas</Link>
            <ul>
              <li>
                <Link to="/recetas/faciles">Fáciles</Link>
              </li>
              <li>
                <Link to="/recetas/menos-de-30-minutos">Menos de 30 minutos</Link>
              </li>
              {/* ... Agrega más enlaces según sea necesario */}
            </ul>
          </li>
          <li>
            <Link to="/ingredientes">Ingredientes</Link>
          </li>
          <li>
            <Link to="/SobreNosotros">Sobre Nosotros</Link>
          </li>
        </NavLinks>
      </NavContainer>
    </StyledNavbar>
  );
  
}


export default Navbar;

