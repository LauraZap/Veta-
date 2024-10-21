import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../assets/veta+logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt='veta+' /> {/* Usa la variable logo aquí */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Películas</Link></li>
        <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
        <li><Link to="/iniciosesion">Inicio Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


