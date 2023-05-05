import './Formacion.css';

import Title from '../../components/Title/Title';

function Formacion() {
  return `
  <main>
    ${Title('Mi formación')}
    <section class="learning-grid-fluid">

    <article class="learning">
      <img class="learning-logo" src="./unex.png" alt="" />
      <div class="learning-institution-info">
        <h3 class="learning-institution">Universidad de extremadura</h3>
        <p class="learning-location">Cáceres, ES 🔴</p>
      </div>
      <p class="learning-title">Grado en administracion y direccion empresas</p>
      <p class="learning-description">TFG: Formación Experiencial</p>
      <p class="learning-date">2013 - 2017</p>
      <p class="learning-ects">240 ects</p>
    </article>

  </section>
    </main>
    `;
}

export default Formacion;
