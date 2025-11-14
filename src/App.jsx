


import { Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="modern-bg">
      <div className="container">
        <header className="header modern-header">
          <img src={logo} alt="Logo LIDIS" className="logo" />
          <h1>
            <span className="highlight">Grupo LIDIS</span>
          </h1>
          <h2 className="subtitle">Laboratorio de Investigación para el Desarrollo de la Ingeniería de Software</h2>
          <div className="categoria">Categoría B</div>
        </header>
        <main>
          <section className="section modern-card">
            <h3>Semilleros de Investigación</h3>
            <div className="semilleros-btns">
              <Link className="semillero-btn" to="/padia">PADIA</Link>
              <Link className="semillero-btn" to="/didi">DIDI 4.0</Link>
              <Link className="semillero-btn" to="/ingenieria-software">Ingeniería de Software</Link>
              <Link className="semillero-btn" to="/bitmind">BIT MIND</Link>
              <Link className="semillero-btn" to="/devseed">DEVSEED</Link>
            </div>
          </section>
          <section className="section modern-card">
            <h3>Objetivo general</h3>
            <p>Realizar investigación aplicada de alta calidad en el área de Ingeniería de Software, con el propósito de constituir un centro de investigación reconocido a nivel regional e internacional.</p>
          </section>
          <section className="section modern-card">
            <h3>Objetivos específicos</h3>
            <ul>
              <li>Enfrentar las investigaciones de manera que cumplan con las más altas exigencias del Sistema Nacional de Ciencia y Tecnología.</li>
              <li>Desarrollar proyectos dentro del programa de investigación del Grupo LIDIS y lograr su vinculación con otros grupos de investigación, universidades y con redes académicas e investigativas a nivel nacional e internacional.</li>
              <li>Socializar la producción académica y los desarrollos del grupo LIDIS mediante la publicación de artículos, ponencias y libros.</li>
              <li>Gestionar y conseguir recursos por medio de instituciones nacionales e internacionales de fomento a proyectos de investigación.</li>
            </ul>
          </section>
          <section className="section modern-card">
            <h3>Retos</h3>
            <ul>
              <li>Consolidación y fortalecimiento a las líneas de investigación en Mejoramiento de procesos de software, Tecnologías de información, Inteligencia Artificial y procesos cognitivos, y Medios digitales e interacción.</li>
              <li>Incrementar la socialización de los resultados respectivos a los proyectos ejecutados por el grupo de investigación, en los espacios académicos apropiados para tal fin.</li>
              <li>Articular las actividades académicas de docencia y proyección social a los procesos investigativos en los que se participa.</li>
              <li>Favorecer el intercambio y la cualificación personal y profesional de todos los integrantes del grupo a partir de pasantías e intercambios con grupos de investigación nacionales y extranjeros.</li>
              <li>Ofrecer cursos y programas de postgrado centrados en la ingeniería de software.</li>
              <li>Ofrecer servicios de asesoría, consultoría e investigación compartida a las instituciones interesadas en los temas objeto de reflexión del grupo.</li>
            </ul>
          </section>
          <section className="section modern-card">
            <h3>Misión</h3>
            <p>El grupo de investigación Laboratorio de Investigación y Desarrollo en Ingeniería de Software (LIDIS), tiene como propósito el estudio e implementación de paradigmas, métodos y nuevas tecnologías en Ingeniería de Software, procurando a la vez, la ejecución de proyectos de investigación y aplicación empresarial, orientados a la generación de conocimientos con pertinencia social, científica y académica en el campo de la ingeniería de software.</p>
          </section>
          <section className="section modern-card">
            <h3>Visión</h3>
            <p>Nuestra visión es ser uno de los más importantes grupos de investigación en ingeniería de software en América Latina, reconocido a nivel nacional e internacional, sirviendo como puente entre la universidad y la industria, enfocándose en adquirir experiencia en el desarrollo de proyectos en los que se aplica con éxito la teoría, facilitando la transferencia tecnológica y la adopción de buenas prácticas, y capaz de socializar significativos resultados de impacto a nivel nacional como internacional, buscando siempre colaborar con el desarrollo de una industria competitiva a escala internacional.</p>
          </section>
          <section className="section modern-card">
            <h3>Integrantes</h3>
            <p>Próximamente...</p>
          </section>
          <section className="section modern-card">
            <h3>Contacto</h3>
            <ul>
              <li>Carrera 122 # 6-65, Cali, Colombia</li>
              <li>+57 3102334941</li>
              <li>PBX 602 488 22 22</li>
              <li>informacion@usbcali.edu.co</li>
            </ul>
          </section>
        </main>
        <footer className="footer modern-footer">
          <p>Todos los derechos reservados © 2025 - Universidad San Buenaventura Cali.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
