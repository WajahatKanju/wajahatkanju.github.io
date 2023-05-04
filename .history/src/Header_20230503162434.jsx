import Typewriter from 'typewriter-effect/dist/core';

import './styles/Header.scss'



const typewriter = new Typewriter('#typewriter', {
  strings: ['Web Designer', 'Web Developer', 'Full Stack Developer'],
  autoStart: true,
  loop: true,
  delay: 80,
});

typewriter.start();

function Header() {
  return (
    <header className="header">
      <h1>
        <span>Hi! I Am Wajahat Ahmad</span>
        <span id='typewriter'></span>
      </h1>
      <h3>Turning ideas into interactive realities</h3>
    </header>
  );
}

export default Header;