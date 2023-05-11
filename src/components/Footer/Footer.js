import './Footer.css';

function Footer(item) {
  return `
        
          
          <a href=${item.href} target=${item.target} rel=${item.rel}>
            <img src=${item.src} alt=${item.alt} />
          </a>
        
      
    `;
}

// Con esta función recorremos la data de los arrays
function generateItems(array) {
  return array.map((item) => Footer(item));
}

// Y finalmente con esta la integramos a la etiqueta
export function generateFooter(array) {
  return `    
  <footer class="rrss">
  <article class="rrss-logos">
  ${generateItems(array).join('')}
  </article>
  </footer>`;
}

export default Footer;
