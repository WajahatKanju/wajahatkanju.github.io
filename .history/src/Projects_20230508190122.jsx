import './styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Todo List',
      description: 'A simple todo list application that allows users to add and complete tasks.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://www.example.com/todolist'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that displays current weather conditions for a given location.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://www.example.com/weatherapp'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description: 'An online store that allows users to browse and purchase products.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://www.example.com/ecommerce'
    },
    {
      id: 4,
      title: 'Recipe App',
      description: 'A recipe application that displays a list of recipes and allows users to search and filter them.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://www.example.com/recipeapp'
    }
  ];

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">My Projects</h2>
      <div className="project-list" role="list">
        {projects.map(project => (
          <div className="project" role="listitem" key={project.id}>
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} aria-label={`Visit ${project.title} project`}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
