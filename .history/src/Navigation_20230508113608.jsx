import { useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope } from "react-icons/fa";
import "./styles/Navigation.scss";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navigation">
      <div className={`navigation__left`}>
        <a
          href="https://github.com/WajahatKanju"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          tabIndex="0"
        >
          <FaGithub alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/wajahat-ahmad-5b493b181/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          tabIndex="0"
        >
          <FaLinkedin alt="LinkedIn Icon" />
        </a>
        <a
          href="https://codepen.io/wajahatahmad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodePen"
          tabIndex="0"
        >
          <FaCodepen alt="CodePen Icon" />
        </a>
        <a 
          href="mailto:wajahat5ahmad@gmail.com"
          aria-label="Email"
          tabIndex="0"
        >
          <FaEnvelope alt="Email Icon" />
        </a>
      </div>
      <ul className={`navigation__right ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#" aria-label="Home" >Home </a>
        </li>
        <li>
          <a href="#about" aria-label="About" >About</a>
        </li>
        <li>
          <a href="#skills" aria-label="Skills" >Skills </a>
        </li>
        <li>
          <a href="#projects" aria-label="Projects" >Projects </a>
        </li>
        <li>
          <a href="#contact" aria-label="Contact" >Contact </a>
        </li>
      </ul>
      <div
        className={`navigation-button ${menuOpen ? "active" : ""}`}
        onClick={handleMenuClick}
        role="button"
      >
        <div className="navigation__menu-icon">
          <div className="navigation__menu-line"></div>
          <div className="navigation__menu-line"></div>
          <div className="navigation__menu-line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
