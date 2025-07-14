interface ProjectsProps {
  setPage: (page: string) => void;
}

function Projects({ setPage }: ProjectsProps) {
  const projects = [
    {
      title: "web development",
      thumbnail: "https://placehold.co/300x400",
      colour: "#202c39",
      text: "#f29559",
    },
    {
      title: "game development",
      thumbnail: "https://placehold.co/300x400",
      colour: "#b8b08d",
      text: "#202c39",
    },
    {
      title: "python",
      thumbnail: "https://placehold.co/300x400",
      colour: "#283845",
      text: "#f29559",
    },
    {
      title: "certificates",
      thumbnail: "https://placehold.co/300x400",
      colour: "#f2d492",
      text: "#202c39",
    },
  ];

  return (
    <main className="projects">
      {projects.map((proj) => {
        return (
          <section
            className="project-section"
            style={{ background: proj.colour }}
          >
            <a className="project-section-link" onClick={() => setPage(proj.title)}>
              <h2 style={{ color: proj.text }}>{proj.title}</h2>
              <img width={300} height={400} src={proj.thumbnail} />
            </a>
          </section>
        );
      })}
    </main>
  );
}

export default Projects;
