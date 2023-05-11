import Title from '../../components/Title/Title';
import experienceData from '../../data/Experience';
import { generateSection } from '../../components/Card/Card';

function Experiencia() {
  return `
  <main>
    ${Title('Mi experiencia laboral')}
    ${generateSection(experienceData)}
  </main>
    `;
}

export default Experiencia;
