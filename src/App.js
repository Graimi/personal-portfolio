import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  // Obtener el elemento con id "app"
  const app = document.getElementById('app');

  app.innerHTML += Header();
  app.innerHTML += Main();
}

export default App;
