import './Header.css';
import { generateFooter } from '../Footer/Footer';
import Profile from '../Profile/Profile';
import footerData from '../../data/Footer';
import generateNavbar from '../Navbar/Navbar';
import navbarData from '../../data/Navbar';
import profileData from '../../data/Profile';

// Con la siguiente función añadimos las diferentes composiciones del header
function Header() {
  return `<header>
  ${Profile(profileData.photo, profileData.name, profileData.surname)}
  ${generateNavbar(navbarData)}
  ${generateFooter(footerData)}
  </header>`;
}

export default Header;
