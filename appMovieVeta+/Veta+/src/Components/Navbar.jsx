import React from 'react';
import '../Styles/Navbar.css';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../assets/veta+logo.png" alt="Logo Veta+" />
      </div>
      <ul className="nav-links">
        <li><a href="#cardviews">Películas</a></li>
        <li><a href="#reviews">Reseñas</a></li>
        <li><a href="#sobrenosotros">Sobre Nosotros</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
