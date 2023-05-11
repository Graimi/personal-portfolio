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
function generateNavbar(data) {
  return `
    <nav>
      <ul>
        ${generateItems(data).join('')}
      </ul>
    </nav>`;
}

export default generateNavbar;
