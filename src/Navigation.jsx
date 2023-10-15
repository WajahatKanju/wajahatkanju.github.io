import { useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
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
          <Link to="header" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            aria-label="About"
            tabIndex="0"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            aria-label="Skills"
            tabIndex="0"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills{" "}
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            aria-label="Projects"
            tabIndex="0"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects{" "}
          </Link>
        </li>
        <li>
          <Link
            to="accomplishments"
            aria-label="Accomplishments"
            tabIndex="0"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Accomplishments{" "}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            aria-label="Contact"
            tabIndex="0"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact{" "}
          </Link>
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
