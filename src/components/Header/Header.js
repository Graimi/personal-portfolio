import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

function Header() {
  // Declaramos las variables para usar en el navbar
  const sct1 = {
    href: '#home',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1682696577/Portfolio/medium_xdghcn.png',
    alt: 'home',
    name: 'Inicio'
  };
  const sct2 = {
    href: '#proyects',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1682696577/Portfolio/proyectos_wp0byt.png',
    alt: 'proyects',
    name: 'Proyectos'
  };
  const sct3 = {
    href: '#experience',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683019501/Portfolio/company_arain0.png',
    alt: 'experience',
    name: 'Experiencia'
  };
  const sct4 = {
    href: '#learning',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1682696577/Portfolio/formacion_ekv5vs.png',
    alt: 'learning',
    name: 'Formación'
  };

  // Declaramos las variables para usar en el footer
  const rs1 = {
    href: 'https://github.com/Graimi',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/github_qlykzr.png',
    alt: 'Github'
  };
  const rs2 = {
    href: 'https://www.linkedin.com/in/floreslujan/',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png',
    alt: 'Linkedin'
  };
  const rs3 = {
    href: 'https://api.whatsapp.com/send?phone=34638560723',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1682880331/Portfolio/whatsapp_pfickm.png',
    alt: 'WhatsApp'
  };
  const rs4 = {
    href: 'mailto:jaimefloreslujan@gmail.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png',
    alt: 'email'
  };

  // Añadimos las composiciones del header
  return `<header>
  ${Profile('./jaime_2.jpeg', 'Jaime <br/> Flores Lujan')}
  ${Navbar({ sct1, sct2, sct3, sct4 })}
  ${Footer({ rs1, rs2, rs3, rs4 })}
  </header>`;
}

export default Header;
