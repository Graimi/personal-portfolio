import './Inicio.css';

import Title from '../../components/Title/Title';
import proyectsData from '../../data/Proyects';
import experienceData from '../../data/Experience';
import learningData from '../../data/Learning';
import { advanceData, basicData, mediumData } from '../../data/Technologies';

function Inicio() {
  // Creamos la siguiente función para contar de manera dinámica los diferentes cards que conforman el portfolio
  function itemCounter(item) {
    return `
  <h1>${item.length}</h1>
  `;
  }

  // Creamos una función para implementar fácilmente los sliders
  function sliderTemplate(heading, value) {
    return `
    <h3>${heading}</h3>
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value=${value}
      readonly="true"
      disabled="true"
      class="slider"
    />
  `;
  }

  // Creamos la función para recorrer el array de los diferentes niveles de tecnologías
  function technologiesItems(item) {
    return item.map((tech) => {
      return `
    <img
      src=${tech.img}
      alt=${tech.technology}
    />
    `;
    });
  }

  return `
  <main>
    ${Title('Bienvenido a mi sitio web')}
    <section class="home-flex">
    <article class="home-resume home-card">
      <h2>Resumen</h2>
      <div class="home-resume-grid">
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/maleta_qqam1q.png"
            alt="proyects"
          />
          ${itemCounter(proyectsData)}
          <p>Proyectos</p>
        </div>
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/compania_bsaq8y.png"
            alt="proyects"
          />
          ${itemCounter(experienceData)}
          <p>Experiencias</p>
        </div>
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/birrete_ornbyh.png"
            alt="proyects"
          />
          ${itemCounter(learningData)}
          <p>Formaciones</p>
        </div>
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374259/Portfolio/idioma_h6ah3a.png"
            alt="proyects"
          />
          <h1>3</h1>
          <p>Idiomas</p>
        </div>
      </div>
    </article>

    <article class="home-technologies home-card">
      <h2>Tecnologías</h2>
      ${sliderTemplate('Básico', 25)}
      <div class="home-technologies-logos">
      ${technologiesItems(basicData).join('')}
      </div>

      ${sliderTemplate('Intermedio', 50)}
      <div class="home-technologies-logos">
      ${technologiesItems(mediumData).join('')}
      </div>

      ${sliderTemplate('Avanzado', 75)}
      <div class="home-technologies-logos">
      ${technologiesItems(advanceData).join('')}
      </div>
    </article>

    <article class="home-half">
      <article class="home-languages home-card">
        <h2>Idiomas</h2>
        <div class="home-languages-language">
        ${sliderTemplate('Español', 100)}
        </div>
        <div class="home-languages-language">
        ${sliderTemplate('Inglés', 66)}
        </div>
        <div class="home-languages-language">
        ${sliderTemplate('Portugués', 33)}
        </div>
      </article>

      <article class="home-more home-card">
        <h2>Emprendimiento</h2>
        <div class="home-entrepreneur">
          <img
            class="home-entrepreneur-img"
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683363973/logos/hermi_q1jivy.png"
            alt="hermi"
          />
          <h3 class="home-entrepreneur-role">Cofundador proyecto</h3>
          <p class="home-entrepreneur-date">Proyecto inactivo</p>
          <a
            class="home-entrepreneur-remarkable"
            href="https://www.elperiodicoextremadura.com/caceres-local/2022/07/20/plataforma-caceres-impulsa-da-empujon-68547740.html"
          >
            <p>🏆 "Cáceres Startups" 2022 📤</p>
          </a>
          <p class="home-entrepreneur-description">
            Combatir la soledad en personas mayores a través de comandos de voz en Alexa
          </p>
        </div>
      </article>
    </article>
  </section>
    </main>
    `;
}

export default Inicio;
