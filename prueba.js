// Función para cargar la sección correspondiente según la URL
function Main() {
  // Obtener el hash actual (sin el símbolo #)
  const hash = window.location.hash.slice(1);

  switch (hash) {
    case 'home':
      return `<main><h2>home</h2><main>`;
    case 'proyects':
      return `<main><h2>proyects</h2><main>`;
    case 'experience':
      return `<main><h2>experience</h2><main>`;
    case 'learning':
      return `<main><h2>learning</h2><main>`;
    default:
      return `<h2>404: Página no encontrada</h2>`;
  }
}

// Cargar la sección correspondiente al cargar la página
Main();

// Escuchar los cambios de URL y cargar la sección correspondiente
window.addEventListener('hashchange', Main);

export default Main;
