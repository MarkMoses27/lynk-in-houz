import { Link } from 'react-router-dom';
import LogoSVG from '../../assets/lynk-in-houz.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={LogoSVG} alt='mylogo' className='logo-container' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className='book-now-btn'>
      <li><a href="https://api.whatsapp.com/send?phone=+254701636709" target="_blank">Book Now</a></li>
      </button>
    </nav>
  );
}

export default Navbar;
