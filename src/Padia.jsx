import React from 'react';
import padiaLogo from './assets/padia.png';
import './App.css';

function Padia() {
  return (
    <div className="container">
      <header className="header modern-header">
        <img src={padiaLogo} alt="Logo PADIA" className="logo" />
        <h1>
          <span className="highlight">Semillero PADIA</span>
        </h1>
        <h2 className="subtitle">Procesamiento y Análisis de Datos e Inteligencia Artificial</h2>
      </header>
      <main>
        <section className="section modern-card">
          <h3>Bienvenido al semillero PADIA</h3>
          <p>Esta es la página exclusiva para el semillero PADIA, donde se desarrollan proyectos de procesamiento y análisis de datos e inteligencia artificial.</p>
        </section>
      </main>
      <footer className="footer modern-footer">
        <p>Todos los derechos reservados © 2024 - Universidad San Buenaventura Cali.</p>
      </footer>
    </div>
  );
}

export default Padia;
