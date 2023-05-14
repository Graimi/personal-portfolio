import Title from '../../components/Title/Title';
import experienceData from '../../data/Experience';
import { generateSection } from '../../components/Card/Card';

// Creamos la función para montar los datos de la página experiencia
function Experiencia() {
  return `
  <main>
    ${Title('Mi experiencia laboral')}
    ${generateSection(experienceData)}
  </main>
    `;
}

export default Experiencia;
