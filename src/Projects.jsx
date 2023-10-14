import "./styles/Projects.scss";

import todoImage from "./assets/projects/todo.png";
import commercePng from "./assets/projects/commerce.png";
import lemonPng from "./assets/projects/lemon.png";
import calculatorPng from "./assets/projects/calculator.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo List",
      description:
        "A simple todo list application that allows users to add and complete tasks.",
      image: todoImage,
      link: "https://github.com/WajahatKanju/react-todo-list",
    },

    {
      id: 2,
      title: "E-commerce Store",
      description:
        "An online store that allows users to browse and purchase products.",
      image: commercePng,
      link: "https://github.com/WajahatKanju/dj-commerce",
    },
    {
      id: 3,
      title: "Little Lemon App",
      description:
        "For my Meta Frontend Developer Program capstone project, I endeavored to build an advanced e-commerce platform that prioritizes user experience and engagement. ",
      image: lemonPng,
      link: "https://wajahatkanju.github.io/little-lemon-front/",
    },
    {
      id: 4,
      title: "React Calculator for Fun",
      description: "I created this React calculator as a hobby project.",
      image: calculatorPng,
      link: "https://wajahatkanju.github.io/basic_react_calculator/",
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">My Projects</h2>
      <div className="project-list" role="list">
        {projects.map((project) => (
          <div className="project" role="listitem" key={project.id}>
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link}
              aria-label={`Visit ${project.title} project`}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
