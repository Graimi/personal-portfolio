import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  // Obtener el elemento con id "app"
  const app = document.getElementById('app');

  app.innerHTML += Header();
  // app.innerHTML += Main();
  app.appendChild(Main());

  //   function loadContent() {
  //     app.innerHTML = Header();
  //     // app.innerHTML += Main();
  //     app.appendChild(Main());
  //   }

  //   // Llamar loadContent al cargar la página
  //   loadContent();

  //   // Escuchar los cambios de URL y llamar loadContent
  //   window.addEventListener('hashchange', loadContent);
}

export default App;
// window.addEventListener('popstate', Main);
