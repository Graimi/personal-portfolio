import './Proyectos.css';

import Title from '../../components/Title/Title';

function Proyectos() {
  return `
  <main>
    ${Title('Mis proyectos')}
    <section class="proyect-grid-fluid">
    <article class="proyect">
      <div class="proyect-front">
        <h2 class="proyect-title">App Nasa</h2>
        <img
          class="proyect-img"
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683122102/Portfolio/nasa_fx2byf.jpg"
          alt="NASA"
        />
        <div class="proyect-technologies">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683109409/Portfolio/html-5_f1rtom.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683109528/Portfolio/css-3_mk4ekg.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683111845/Portfolio/react_utyaxc.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683111845/Portfolio/prettier_lr7ulu.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683111845/Portfolio/eslint_uoqruy.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683111845/Portfolio/vite_wdnohr.png"
            alt=""
          />
        </div>
        <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
      </div>
      <div class="proyect-back">
        <p>
          Se ha creado una web que consume dos API’s oficiales de la NASA. 'APOD', para
          consultar la fotografía astronómica del día y 'Mars Rover Photos' para consultar las
          imágenes de los rovers.
        </p>
        <a href="">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683118881/Portfolio/github_ejpjmn.png"
            alt="Github"
          />
        </a>
      </div>
    </article>
  </section>
    </main>
    `;
}

export default Proyectos;
