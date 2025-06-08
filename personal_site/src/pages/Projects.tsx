
function Projects() {
  const projects = [
    { title: "test1", thumbnail: "https://placehold.co/300x400" },
    { title: "test2", thumbnail: "https://placehold.co/300x400" },
    { title: "test3", thumbnail: "https://placehold.co/300x400" },
    { title: "test4", thumbnail: "https://placehold.co/300x400" },
  ];

  return (
    <div className="projects">
        {projects.map((proj) => {
          return (
            <section className="project-section">
              <label>{proj.title}</label>
              <img width={300} height={400} src={proj.thumbnail} />
            </section>
          );
        })}
    </div>
  );
}

export default Projects;
