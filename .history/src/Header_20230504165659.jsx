import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./styles/Header.scss";

function Header() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Web Designer", "Web Developer", "Full Stack Developer"],
      autoStart: true,
      loop: true,
      delay: 80,
    });
    setTimeout(() => {

      typewriter.start();
    }, 1000)
  }, []);

  return (
    <header className="header">
      <div className="header__left">
        <h1>Hi! I Am Wajahat Ahmad</h1>
        <p id="typewriter"></p>
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
