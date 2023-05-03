import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope, FaStackOverflow } from 'react-icons/fa';
import './styles/Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__left">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://codepen.io/username" target="_blank" rel="noopener noreferrer">
          <FaCodepen />
        </a>
        <a href="mailto:email@example.com">
          <FaEnvelope />
        </a>
        <a href="https://stackoverflow.com/users/123456/username" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
      </div>
      <ul className="navigation__right">
        <li> <a href="#">Home </a> </li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#skills">Skills </a></li>
        <li> <a href="#portfolio">Portfolio </a></li>
        <li> <a href="#contact">Contact </a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
