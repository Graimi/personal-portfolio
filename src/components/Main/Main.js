import './Main.css';

// Opción 1 de función para cambiar páginas
// const main = document.createElement('main');

// Función para cargar la sección correspondiente según la URL
function Main() {
  // Obtener el hash actual (sin el símbolo #)
  const hash = window.location.hash.slice(1);
  // const hash = window.location.pathname;
  console.log(hash);

  const mainContent = document.createElement('main');

  if (hash === 'home') {
    mainContent.innerHTML = `
      <h1>Bienvenido a mi sitio web</h1>
      <p>Este es el contenido de la página de inicio</p>
    `;
  } else if (hash === 'proyects') {
    mainContent.innerHTML = `
      <h1>Mis proyectos</h1>
      <ul>
        <li>Proyecto 1</li>
        <li>Proyecto 2</li>
        <li>Proyecto 3</li>
      </ul>
    `;
  } else if (hash === 'learning') {
    mainContent.innerHTML = `
      <h1>Mi formación</h1>
      <ul>
        <li>Formación 1</li>
        <li>Formación 2</li>
        <li>Formación 3</li>
      </ul>
    `;
  } else if (hash === 'experience') {
    mainContent.innerHTML = `
      <h1>Mi experiencia laboral</h1>
      <ul>
        <li>Experiencia 1</li>
        <li>Experiencia 2</li>
        <li>Experiencia 3</li>
      </ul>
    `;
  }

  return mainContent;

  // // Cargar la sección correspondiente según el hash
  // switch (hash) {
  //   case 'home':
  //     return `<h2>home</h2>`;
  //   case 'proyects':
  //     return `<h2>proyects</h2>`;
  //   case 'experience':
  //     return `<h2>experience</h2>`;
  //   case 'learning':
  //     return `<h2>learning</h2>`;
  //   default:
  //     return `<h2>404: Página no encontrada</h2>`;
  // }
}

// Cargar la sección correspondiente al cargar la página
// AL ACABAR VER SI AÑADIR O NO
Main();

// Escuchar los cambios de URL
window.addEventListener('hashchange', Main);

export default Main;






// // Función para cargar la sección correspondiente según la URL
// function Main() {
//   // Obtener el hash actual (sin el símbolo #)
//   const hash = window.location.hash.slice(1);

//     // Cargar la sección correspondiente según el hash
//   switch (hash) {
//     case 'home':
//       return `<main><h2>home</h2><main>`;
//     case 'proyects':
//       return `<main><h2>proyects</h2><main>`;
//     case 'experience':
//       return `<main><h2>experience</h2><main>`;
//     case 'learning':
//       return `<main><h2>learning</h2><main>`;
//     default:
//       return `<h2>404: Página no encontrada</h2>`;
//   }
// }

// // Cargar la sección correspondiente al cargar la página
// Main();

// // Escuchar los cambios de URL y cargar la sección correspondiente
// window.addEventListener('hashchange', Main);

// export default Main;
