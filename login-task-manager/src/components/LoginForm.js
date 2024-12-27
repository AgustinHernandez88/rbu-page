import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      {/* Contenedor izquierdo con fondo y logo */}
      <div className="login-left">
        <img
          src={require("../assets/background.jpg")}
          alt="Background"
          className="background-image"
        />
        
        <div className="overlay"></div> {/* Capa negra semi-transparente */}
        
        {/* Logo de Mirbu */}
        <img
          src={require("../assets/logo_mirbu.png")}
          alt="Logo Mirbu"
          className="logo-mirbu"
        />
        <img
          src={require("../assets/circle_white.png")}
          alt="Circle White"
          className="circle_white"
        />
      </div>

      {/* Contenedor derecho con el formulario de login */}
      <div className="login-right">
        <form className="login-form">
          <h2>Acceso usuarios</h2>
          {/* Campo de entrada para Rut */}
          <div className="input-group">
            <input type="text" placeholder="Rut" required />
          </div>

          {/* Campo de entrada para contraseña */}
          <div className="input-group">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Contraseña"
              required
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
              role="button"
              aria-label={passwordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Opciones de sesión y enlace de "Olvidé mi contraseña" */}
          <div className="options">
            <label>
              <input type="checkbox" />
              Mantener sesión abierta
            </label>
            <a href="/" className="forgot-password">
              Olvidé mi contraseña
            </a>
          </div>

          {/* Botón de login */}
          <button type="submit" className="login-button">
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;