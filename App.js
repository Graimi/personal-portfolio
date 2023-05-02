import './index.css';
import Main from './src/components/Main/Main';
// import Footer from './src/components/Footer/Footer';

// Obtener el elemento con id "app"
const app = document.getElementById('app');

function App() {
  app.appendChild(Main);
}

export default App;
