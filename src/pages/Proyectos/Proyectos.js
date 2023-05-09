import './Proyectos.css';

import Title from '../../components/Title/Title';
import proyectsData from '../../data/Proyects';

function Proyectos() {
  const proyectItems = proyectsData.map((item) => {
    const technologiesItems = item.technologies.map((technology) => {
      return `
        <img
          src="${technology.img}"
          alt="${technology.technology}"
        />
      `;
    });

    return `
    <article class="proyect">
      <div class="proyect-front">
        <h2 class="proyect-title">${item.proyect}</h2>
        <img
          class="proyect-img"
          src=${item.img}
          alt=${item.proyect}
        />
        <div class="proyect-technologies">
        ${technologiesItems.join('')}
        </div>
        <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
      </div>
      <div class="proyect-back">
        <p>${item.description}</p>
        <p class="proyect-origin">${item.origin}</p>
        <div class="proyect-links">
          <a href=${item.linkRepo} target="_blank" rel="noopener noreferrer">
            <img
              src=${item.imgRepo}
              alt=${item.repo}
            />
          </a>
          <a href=${item.linkdeploy} target="_blank" rel="noopener noreferrer">
          <img
            src='https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626612/Portfolio/open_in_new_liibm3.svg'
            alt='open in new'
          />
        </a>
      </div>
      </div>
    </article>
  `;
  });

  return `
  <main>
    ${Title('Mis proyectos')}
    <section class="proyect-grid-fluid">
    ${proyectItems.join('')}
  </section>
    </main>
    `;
}

export default Proyectos;
