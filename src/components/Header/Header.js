import './Header.css';
import { generateFooter } from '../Footer/Footer';
import Profile from '../Profile/Profile';
import footerData from '../../data/Footer';
import generateNavbar from '../Navbar/Navbar';
import navbarData from '../../data/Navbar';

function Header() {
  // Añadimos las composiciones del header
  return `<header>
  ${Profile(
    'https://res.cloudinary.com/dwsffp1eq/image/upload/v1683570387/Portfolio/jaime_w6sze5.jpg',
    'Jaime',
    'Flores Luján'
  )}
  ${generateNavbar(navbarData)}
  ${generateFooter(footerData)}
  </header>`;
}

export default Header;
