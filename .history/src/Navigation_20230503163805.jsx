import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaEnvelope, FaStackOverflow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
      <div className="navigation__right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;
