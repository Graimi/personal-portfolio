import './Experiencia.css';

import Title from '../../components/Title/Title';
import experienceData from '../../data/Experience';
import generateCards from '../../components/Card/Card';

function Experiencia() {
  const experienceItems = experienceData.map((item) => {
    return `
    <a href=${item.link} target="_blank" rel="noopener noreferrer">
    <article class="experience">
    <img class="experience-logo" src="${item.logo}" alt="${item.company}" />
    <div class="experience-company-info">
      <h2 class="experience-company">${item.company}</h2>
      <p class="experience-location">${item.location} <img src="${item.flag}" alt=${item.country}/></p>
    </div>
    <h3 class="experience-job">${item.job}</h3>
    <p class="experience-date">${item.date}</p>
    <p class="experience-description">
      ${item.description}
    </p>
  </article>
  </a>
  `;
  });

  return `
  <main>
    ${Title('Mi experiencia laboral')}
    <section class="experience-grid-fluid">
    ${generateCards(experienceData)}
    ${experienceItems.join('')}
  </section>
  </main>
    `;
}

export default Experiencia;
