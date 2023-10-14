/* eslint-disable react/prop-types */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Skills.scss";

import htmlImg from "./assets/skills/html.webp";
import cssImg from "./assets/skills/css.png";
import jsImg from "./assets/skills/js.webp";

import djangoImg from "./assets/skills/django.webp";
import reactImg from "./assets/skills/react.webp";
import bootstrapImg from "./assets/skills/bootstrap.webp";
import htmlCanvasImg from "./assets/skills/canvas.png";

const skillsData = [
  { name: "HTML", percent: "90%", image: htmlImg },
  { name: "CSS", percent: "85%", image: cssImg },
  { name: "JavaScript", percent: "80%", image: jsImg },
  { name: "Django", percent: "70%", image: djangoImg },
  { name: "React", percent: "75%", image: reactImg },
  { name: "Bootstrap", percent: "80%", image: bootstrapImg },
  { name: "HTML Canvas", percent: "60%", image: htmlCanvasImg },
];

const Skill = ({ id, name, percent, image }) => (
  <div className="skill" id={"skill-" + id}>
    <h3 className="skill__name">{name}</h3>
    <img className="skill__image" src={image} alt={name + "_Image"} />
    <div className="skill__bar">
      <div className="skill__fill" style={{ width: percent }}>
        <span className="skill__percent">{percent}</span>
      </div>
    </div>
  </div>
);

function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skills = gsap.utils.toArray(".skill");

    skills.forEach((skill, index) => {
      skill.addEventListener("mouseenter", () => {
        gsap.to(`#${skill.id}`, { scale: 1.2, y: -30, duration: 0.01 });
      });
      skill.addEventListener("mouseleave", () => {
        gsap.to(`#${skill.id}`, { scale: 1, y: 0, duration: 0.03 });
      });

      gsap.to(`#${skill.id}`, {
        x: 0,
        scrollTrigger: {
          trigger: "#skills",
          start: `top+=${index * 10} 50%`,
          end: `top+=${(index + 1) * 20} 50%`,
          scrub: 0.5,
        },
      });
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__header">Skills</h2>

      <div className="skills__container">
        {skillsData.map((skill, index) => (
          <Skill
            id={index}
            name={skill.name}
            percent={skill.percent}
            image={skill.image}
            key={index}
            className="skill"
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
