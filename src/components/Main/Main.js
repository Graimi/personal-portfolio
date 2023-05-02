// Opción 1 de función para cambiar páginas
// const main = document.createElement('main');
const main = document.querySelector('main');

const prueba = '<p>prueba</p>';
const inicio = `<h2>Inicio</h2><p>Texto sobre la sección Inicio.</p>${prueba}`;

// Función para cargar la sección correspondiente según la URL
function Main() {
  // Obtener el hash actual (sin el símbolo #)
  const hash = window.location.hash.slice(1);

  // Cargar la sección correspondiente según el hash
  switch (hash) {
    case 'home':
      main.innerHTML = inicio;
      break;
    case 'proyects':
      main.innerHTML =
        '<h2>Proyectos</h2><ul><li>Proyecto 1</li><li>Proyecto 2</li><li>Proyecto 3</li></ul>';
      break;
    case 'experience':
      main.innerHTML =
        '<h2>Experiencia</h2><ul><li>Empresa 1</li><li>Empresa 2</li><li>Empresa 3</li></ul>';
      break;
    case 'learning':
      main.innerHTML =
        '<h2>Formación</h2><ul><li>Curso 1</li><li>Curso 2</li><li>Curso 3</li></ul>';
      break;
    default:
      main.innerHTML = '<h2>404: Página no encontrada</h2>';
      break;
  }
}

// Cargar la sección correspondiente al cargar la página
// AL ACABAR VER SI AÑADIR O NO
// Main();

// Escuchar los cambios de URL y cargar la sección correspondiente
window.addEventListener('hashchange', Main);

export default Main;
