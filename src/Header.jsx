import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./styles/Header.scss";
import "animate.css";
import ImageParticleAnimation from "./ImageParticleAnimation";

function Header() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Web Designer", "Web Developer", "Full Stack Developer"],
      loop: true,
      delay: 80,
      autoStart: true,
    });

    typewriter.start();
  }, []);

  const text = "Hi! I Am Wajahat Ahmad";
  const words = text.split(" ");
  const slogan = "Turning ideas into interactive realities";
  const sloganWords = slogan.split(" ");

  return (
    <header className="header" role="banner" id="header">
      <div className="header__left">
        <h1>
          {words.map((word) => (
            <>
              {word.split("").map((character, i) => (
                <span key={i}>{character}</span>
              ))}
              &nbsp;
            </>
          ))}
        </h1>
        <p id="typewriter"></p>
        <h3>
          {sloganWords.map((word, index) => (
            <span key={index}>
              {word.split("").map((character, i) => (
                <span key={i}>{character}</span>
              ))}
              &nbsp;
            </span>
          ))}
        </h3>
      </div>
      <div className="header__right ">
        <ImageParticleAnimation />
      </div>
    </header>
  );
}

export default Header;
