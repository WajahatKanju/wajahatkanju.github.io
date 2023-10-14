import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/About.scss";

import aboutMeImage from "./assets/about-me.png";

function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about__image", {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    gsap.to(".about__content", {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "top 55%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="about" id="about" aria-label="About Me">
      <div className="about__container">
        <div className="about__image">
          <img src={aboutMeImage} alt="about-me" />
        </div>
        <div className="about__content">
          <h2>About Me</h2>
          <p>
            I am a coding enthusiast. I have a deep passion for all things
            related to computers and spend most of my time working on various
            coding projects. In addition to my love for technology, I also enjoy
            traveling and hiking.
          </p>
          <p>
            I started my coding journey at the age of 13 and have since honed my
            skills through a variety of experiences. I have completed several
            projects on freecodecamp and earned certificates from Coursera. I
            have also tried out the Microverse program and have experience with
            automation using Selenium.
          </p>
          <p>
            I am always eager to learn more and expand my skillset. Whether
            it&apos;s tackling a new coding challenge or exploring a new part of
            the world, I am excited for the opportunities that the future holds.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
