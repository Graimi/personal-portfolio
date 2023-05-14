import './Title.css';

// Creamos el template para el title
function Title(title) {
  return `
    <div class="title">
        <h1 class="title-text">${title}</h1>
        <div class="title-decoration"><br /></div>
    </div>
      `;
}

export default Title;
