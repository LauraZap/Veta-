import React, { useState } from 'react';
import logo from '../assets/veta+logo.png'; 

const InicioSesion = () => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputApellido, cambiarInputApellido] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputContraseña, cambiarInputContraseña] = useState('');
    const [inputConfirmarContraseña, cambiarInputConfirmarContraseña] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Inicio Sesion!');
    };

    const handleInputNombre = (e) => {
        cambiarInputNombre(e.target.value);
    };
    const handleInputApellido = (e) => {
        cambiarInputApellido(e.target.value);
    };
    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    };
    const handleInputContraseña = (e) => {
        cambiarInputContraseña(e.target.value);
    };
    const handleInputConfirmarContraseña = (e) => {
        cambiarInputConfirmarContraseña(e.target.value);
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <div className="logo-container">
                    <img src={logo} alt='veta+' className="logo" />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        id="nombre"
                        value={inputNombre}
                        onChange={handleInputNombre}
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
                        onChange={handleInputApellido}
                    />
                </div>
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="text"
                        name="correo"
                        placeholder="Correo"
                        id="correo"
                        value={inputCorreo}
                        onChange={handleInputCorreo}
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
                        onChange={handleInputContraseña}
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
                        onChange={handleInputConfirmarContraseña}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default InicioSesion;
