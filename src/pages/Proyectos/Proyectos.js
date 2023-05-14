import './Proyectos.css';

import Title from '../../components/Title/Title';
import proyectsData from '../../data/Proyects';

// Creamos la función común para lanzar el resto de funciones de proyectos
function Proyectos() {
  // Con esta función recorremos la data de los arrays
  const proyectItems = proyectsData.map((item) => {
    // Creamos la función para recorrer el array de las diferentes tecnologías usadas por proyecto
    const technologiesItems = item.technologies.map((technology) => {
      return `
        <img
          src="${technology.img}"
          alt="${technology.technology}"
        />
      `;
    });

    // Establecemos el template de cada proyecto
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

  // Pasamos el return de función Proyectos con el template de la página
  return `
  <main>
    ${Title('Mis proyectos')}
      <section class="proyect-flex-fluid">
        ${proyectItems.join('')}
      </section>
  </main>
  `;
}

export default Proyectos;
