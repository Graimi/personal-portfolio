function Navbar({ sct1, sct2, sct3, sct4 }) {
  return `<nav>
    <ul>
      <li>
        <a href=${sct1.href} class="nav_item">
          <img
            src=${sct1.src}
            alt=${sct1.alt}
            class="nav_image"
          />
          <h2>${sct1.name}</h2>
        </a>
      </li>
      <li>
        <a href=${sct2.href} class="nav_item">
          <img
            src=${sct2.src}
            alt=${sct2.alt}
            class="nav_image"
          />
          <h2>${sct2.name}</h2>
        </a>
      </li>
      <li>
      <a href=${sct3.href} class="nav_item">
        <img
          src=${sct3.src}
          alt=${sct3.alt}
          class="nav_image"
        />
        <h2>${sct3.name}</h2>
      </a>
    </li>
    <li>
    <a href=${sct4.href} class="nav_item">
      <img
        src=${sct4.src}
        alt=${sct4.alt}
        class="nav_image"
      />
      <h2>${sct4.name}</h2>
    </a>
  </li>
    </ul>
  </nav>`;
}

export default Navbar;
