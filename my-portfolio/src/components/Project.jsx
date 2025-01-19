import '../styles/Project.css';

const Project = (project) => {
  return (
    <section className="project-format">
      <a href={project.link} target="blank" rel="noreferrer">
        <div className="proj-column1 col">
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
        </div>
      </a>
      <div className="proj-column2 col">
        <p>{project.description}</p>
        {project.linkText && <a href={project.linkText.href} target="blank" rel="noreferrer">{project.linkText.text}</a>}
        <p>{project.techstack}</p>
      </div>
    </section>
  )
}

export default Project;
