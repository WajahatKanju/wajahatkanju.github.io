import Typewriter from "typewriter-effect/dist/core";
import "./styles/Header.scss";


function Header() {
  const handleTypewriterInit = (typewriter) => {
    typewriter.typeString('Web Designer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Web Developer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Full Stack Developer')
      .pauseFor(1000)
      .start();
  };

  return (
    <header className="header">
      <div className="header__left">
        <h1>Hi! I Am Wajahat Ahmad</h1>
        <Typewriter onInit={handleTypewriterInit} />
        <h3>Turning ideas into interactive realities</h3>
      </div>
      <div className="header__right">
        <img src="" alt="" />
        <canvas id="picture_canvas"></canvas>
      </div>
    </header>
  );
}

export default Header;
