import './Card.css';

// Creamos la template que usaremos para las cards
function Card(item) {
  return `
      <article class="card">
        <div class="card-front">
          <h2 class="card-institution">${item.institution}</h2>
          <img
            class="card-img"
            src=${item.logo}
            alt=${item.institution}
          />
          <h3 class="card-title">${item.title}</h3>
          <img class="card-flag" src="${item.flag}" alt=${item.country}/>
          <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
        </div>
        <div class="card-back">
          <p class="card-location">${item.location}</p>
          <p class="card-description">${item.description}</p>
          <div class="card-info">
            <p>${item.date}</p>
            <p>${item.ects}</p>
            <a href=${item.link} target="_blank" rel="noopener noreferrer">
            <img
                src='https://res.cloudinary.com/dwsffp1eq/image/upload/v1683626612/Portfolio/open_in_new_liibm3.svg'
                alt='open in new'
            />
            </a>
          </div>
        </div>
      </article>
    `;
}

// Con esta función recorremos la data de los arrays
function generateCards(array) {
  return array.map((item) => Card(item));
}

// Y finalmente con esta la integramos a la sección
export function generateSection(array) {
  return `    
    <section class="card-flex-fluid">
  ${generateCards(array).join('')}
    </section>`;
}

export default generateSection;
