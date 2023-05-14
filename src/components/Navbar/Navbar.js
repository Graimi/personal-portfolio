import './Navbar.css';

// Creamos el template para cada navegable de la barra
function Navbar(item) {
  return `
      <li>
        <a href=${item.href} class="nav-item">
          <img
            class="nav-image"
            src=${item.src}
            alt=${item.alt}
          />
          <h2 class="nav-title">${item.name}</h2>
        </a>
      </li>`;
}

// Con esta función recorremos la data de los arrays
function generateItems(array) {
  return array.map((item) => Navbar(item));
}

// Y finalmente con esta la integramos a la etiqueta
// Aquí también integramos el hamburguer de la navbar
function generateNavbar(data) {
  return `
  <label class="nav-hamburguer-label" for="hamburger"><img src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683803169/Portfolio/menu-hamburguesa_1_dml1kx.png" alt="hamburguer"></label>
  <input type="checkbox" name="nav-hamburguer" class="nav-hamburguer" id="hamburger" />
  <nav>
    <ul class="nav-list">
      ${generateItems(data).join('')}
    </ul>
  </nav>`;
}

export default generateNavbar;
