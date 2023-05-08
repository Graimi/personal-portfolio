import './Main.css';

import Inicio from '../../pages/Inicio/Inicio';
import Proyectos from '../../pages/Proyectos/Proyectos';
import Experiencia from '../../pages/Experiencia/Experiencia';
import Formacion from '../../pages/Formacion/Formacion';

// Función para cargar la sección correspondiente según la URL
function Main() {
  // Obtener el hash actual (sin el símbolo #)
  const hash = window.location.hash.slice(1);

  // Cargar la sección correspondiente según el hash
  switch (hash) {
    case 'home':
      return Inicio();
    case 'proyects':
      return Proyectos();
    case 'experience':
      return Experiencia();
    case 'learning':
      return Formacion();

    default:
      return Inicio();
  }
}

export default Main;
