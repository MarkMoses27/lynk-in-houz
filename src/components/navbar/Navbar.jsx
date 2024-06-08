import { Link } from 'react-router-dom';
import LogoSVG from '../../assets/lynk-in-houz.svg';
import './Navbar.css';

function Navbar() {
  const navbarItems = [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 0,
      title: 'About US ',
      link: '/about',
      items: [
        { id: 0, title: 'Our History', link: '/' },
        { id: 1, title: 'Contact us', link: '/' },
      ],
    },
    {
      id: 0,
      title: 'Services',
      link: '/services',
      items: [
        { id: 0, title: 'Pedicure', link: '/' },
        { id: 1, title: 'Manicure', link: '/' },
        { id: 2, title: 'Nail Art', link: '/' },
        { id: 3, title: 'Nail Extension', link: '/' },
      ],
    },
    {
      id: 0,
      title: 'Pages',
      link: '/pages',
      items: [
        { id: 0, title: 'Team', link: '/team' },
        { id: 1, title: 'Pricing Plan', link: '/pricing' },
        { id: 2, title: 'FAQ', link: '/faq' }
      ],
    },
    {
      id: 0,
      title: 'Blog',
      link: '/blog',
    },
  
    {
      id: 0,
      title: 'Contact Us',
      link: '/contact',
    }
  ];

  return (
    <nav>
      <img src={LogoSVG} alt="mylogo" className="logo-container" />
      <ul>
        {navbarItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link to={item.link} style={{color: 'white'}}>{item.title}</Link>
            {item.items && (
              <ul className="dropdown-menu">
                {item.items.map((link) => (
                  <li key={link.id}>
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button className="book-now-btn">
        <li>
          <a href="https://api.whatsapp.com/send?phone=+254701636709" target="_blank" rel="noreferrer">
            Book Now
          </a>
        </li>
      </button>
    </nav>
  );
}

export default Navbar;