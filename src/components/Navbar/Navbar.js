import './Navbar.css';

function Navbar(item) {
  return `
      <li>
        <a href=${item.href} class="nav_item">
          <img
            src=${item.src}
            alt=${item.alt}
            class="nav_image"
          />
          <h2>${item.name}</h2>
        </a>
      </li>
      <li>`;
}

// Con esta función recorremos la data de los arrays
function generateItems(array) {
  return array.map((item) => Navbar(item));
}

// Y finalmente con esta la integramos a la etiqueta
// Aquí también integramos el hamburguer de la navbar
function generateNavbar(data) {
  return `
  <label class="bc__hamburguer__label" for="hamburger"><img src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1683803169/Portfolio/menu-hamburguesa_1_dml1kx.png" alt="hamburguer"></label>
  <input type="checkbox" name="bc__hamburguer" class="bc__hamburguer" id="hamburger" />
  <nav>
    <ul>
      ${generateItems(data).join('')}
    </ul>
  </nav>`;
}

export default generateNavbar;
