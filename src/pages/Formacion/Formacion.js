import './Formacion.css';
import Title from '../../components/Title/Title';
import learningData from '../../data/Learning'; // Importa el array de datos
import generateCards from '../../components/Card/Card';

function Formacion() {
  const learningItems = learningData.map((item) => {
    return `
    <a href=${item.link} target="_blank" rel="noopener noreferrer">
      <article class="learning">
        <img class="learning-logo" src=${item.logo} alt=${item.institution}/>
        <div class="learning-institution-info">
          <h3 class="learning-institution">${item.institution}</h3>
          <p class="learning-location">${item.location} <img src="${item.flag}" alt=${item.country}/></p>
        </div>
        <p class="learning-title">${item.title}</p>
        <p class="learning-description">${item.description}</p>
        <p class="learning-date">${item.date}</p>
        <p class="learning-ects">${item.ects}</p>
      </article>
      </a>
    `;
  });

  return `
    <main>
      ${Title('Mi formación')}
      <section class="learning-grid-fluid">
      ${generateCards(learningData).join('')}
        ${learningItems.join('')}
      </section>
    </main>
  `;
}

export default Formacion;
