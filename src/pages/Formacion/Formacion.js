import Title from '../../components/Title/Title';
import learningData from '../../data/Learning'; // Importa el array de datos
import { generateSection } from '../../components/Card/Card';

function Formacion() {
  return `
    <main>
      ${Title('Mi formación')}
      ${generateSection(learningData)}
    </main>
  `;
}

export default Formacion;
