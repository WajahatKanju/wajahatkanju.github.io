import { useState } from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope } from 'react-icons/fa';
import './styles/Navigation.scss';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navigation">
      
      <div className={`navigation__left ${menuOpen ? 'navigation__left--open' : ''}`}>
        <a href="https://github.com/WajahatKanju" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/wajahat-ahmad-5b493b181/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://codepen.io/wajahatahmad" target="_blank" rel="noopener noreferrer">
          <FaCodepen />
        </a>
        <a href="mailto:wajahat5ahmad@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <ul className={`navigation__right ${menuOpen ? 'navigation__right--open' : ''}`}>
        <li> <a href="#">Home </a> </li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#skills">Skills </a></li>
        <li> <a href="#portfolio">Portfolio </a></li>
        <li> <a href="#contact">Contact </a></li>
      </ul>
      <button className={`navigation__menu-button ${menuOpen ? 'navigation__menu-button--open' : ''}`} onClick={handleMenuClick}>
        <div className="navigation__menu-icon">
          <div className="navigation__menu-line"></div>
          <div className="navigation__menu-line"></div>
          <div className="navigation__menu-line"></div>
        </div>
      </button>
    </nav>
  );
}

export default Navigation;
