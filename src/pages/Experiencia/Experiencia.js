import './Experiencia.css';

import Title from '../../components/Title/Title';

function Experiencia() {
  return `
  <main>
    ${Title('Mi experiencia laboral')}
    <section class="experience-grid-fluid">
    <article class="experience">
      <img class="experience-logo" src="./fundacion-cooprado.png" alt="" />
      <div class="experience-company-info">
        <h2 class="experience-company">Fundación Cooprado</h2>
        <p class="experience-location">Casar de Cáceres, ES 🔴</p>
      </div>
      <h3 class="experience-job">Asesor en Políticas EU y Comercio internacional</h3>
      <p class="experience-date">2020-2022</p>
      <p class="experience-description">
        - Gestionar proyectos técnicos a nivel nacional <br />
        - Participar en el desarrollo de proyectos sociales <br />
        - Diseñar material gráfico corporativo y aplicado a los proyectos en marcha
      </p>
    </article>
  </section>
  </main>
    `;
}

export default Experiencia;
