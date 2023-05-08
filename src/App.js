import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  // Obtenemos el elemento app
  const app = document.getElementById('app');

  // Al establecer el signo igual sin más provocamos que se reinicia la página cuando recargamos
  // evitando de esta manera que se colapse la app sumándose contenido
  app.innerHTML = Header();
  app.innerHTML += Main();
}

// Llamamos a la función App al cargar la página
App();

// Escuchamos los cambios de la URL y llamamos a la función App para recargar la página
window.addEventListener('hashchange', App);

export default App;
