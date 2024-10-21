import React, { useState } from 'react';
import '../Styles/Formulario.css';

const InicioSesion = () => {
  const [inputNombre, cambiarInputNombre] = useState('');
  const [inputApellido, cambiarInputApellido] = useState('');
  const [inputCorreo, cambiarInputCorreo] = useState('');
  const [inputContraseña, cambiarInputContraseña] = useState('');
  const [inputConfirmarContraseña, cambiarInputConfirmarContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputContraseña !== inputConfirmarContraseña) {
      alert('Las contraseñas no coinciden');
    } else {
      console.log('Inicio Sesión Exitoso');
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="formulario">
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          id="nombre"
          value={inputNombre}
          onChange={(e) => cambiarInputNombre(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          id="apellido"
          value={inputApellido}
          onChange={(e) => cambiarInputApellido(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          id="correo"
          value={inputCorreo}
          onChange={(e) => cambiarInputCorreo(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contraseña">Contraseña</label>
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          id="contraseña"
          value={inputContraseña}
          onChange={(e) => cambiarInputContraseña(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmarContraseña"
          placeholder="Confirmar Contraseña"
          id="confirmarContraseña"
          value={inputConfirmarContraseña}
          onChange={(e) => cambiarInputConfirmarContraseña(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default InicioSesion;
