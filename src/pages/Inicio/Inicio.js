import './Inicio.css';

import Title from '../../components/Title/Title';

function Inicio() {
  return `
  <main>
    ${Title('Bienvenido a mi sitio web')}
    <section class="home-flex">
    <article class="home-resume card">
      <h2>Resumen</h2>
      <div class="home-resume-grid">
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/maleta_qqam1q.png"
            alt="proyects"
          />
          <h1>?</h1>
          <p>Proyectos</p>
        </div>
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/compania_bsaq8y.png"
            alt="proyects"
          />
          <h1>?</h1>
          <p>Experiencias</p>
        </div>
        <div class="home-resume-info">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683374192/Portfolio/birrete_ornbyh.png"
            alt="proyects"
          />
          <h1>?</h1>
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

    <article class="home-technologies card">
      <h2>Tecnologías</h2>
      <h3>Básico</h3>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value="25"
        readonly="true"
        disabled="true"
        class="slider"
      />
      <div class="home-technologies-logos">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
      </div>

      <div>
        <h3>Intermedio</h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value="50"
          readonly="true"
          disabled="true"
          class="slider"
        />
      </div>
      <div class="home-technologies-logos">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
      </div>

      <div>
        <h3>Avanzado</h3>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value="75"
          readonly="true"
          disabled="true"
          class="slider"
        />
      </div>
      <div class="home-technologies-logos">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683362634/logos/python_zcbubw.svg"
          alt="python"
        />
      </div>
    </article>
    <article class="home-half">
      <article class="home-languages card">
        <h2>Idiomas</h2>
        <div class="home-languages-language">
          <h3>Español</h3>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value="100"
            readonly="true"
            disabled="true"
            class="slider"
          />
        </div>
        <div class="home-languages-language">
          <h3>Inglés</h3>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value="66"
            readonly="true"
            disabled="true"
            class="slider"
          />
        </div>
        <div class="home-languages-language">
          <h3>Portugués</h3>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value="33"
            readonly="true"
            disabled="true"
            class="slider"
          />
        </div>
      </article>

      <article class="home-more card">
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
