import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../../assets/lynk-in-houz.svg';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 1,
      title: 'About Us',
      link: '/about',
    },
    {
      id: 2,
      title: 'Services',
      link: '/services',
      items: [
        { id: 0, title: 'Pedicure', link: '/pedicure' },
        { id: 1, title: 'Manicure', link: '/manicure' },
        { id: 2, title: 'Nail Art', link: '/nail-art' },
        { id: 3, title: 'Nail Extension', link: '/nail-extension' },
      ],
    },
    {
      id: 3,
      title: 'Pages',
      link: '/pages',
      items: [
        { id: 0, title: 'Team', link: '/team' },
        { id: 1, title: 'Pricing Plan', link: '/pricing' },
        { id: 2, title: 'FAQ', link: '/faq' }
      ],
    },
    {
      id: 4,
      title: 'Blog',
      link: '/blog',
    },
    {
      id: 5,
      title: 'Contact Us',
      link: '/contact',
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={LogoSVG} alt="Lynk Beauty Spa" className="logo" />
        </Link>
        <button className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navbarItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link to={item.link} className="nav-links" onClick={toggleMenu}>{item.title}</Link>
              {item.items && (
                <ul className="dropdown-menu">
                  {item.items.map((link) => (
                    <li key={link.id}>
                      <Link to={link.link} className="dropdown-link" onClick={toggleMenu}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="book-now-btn">
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
