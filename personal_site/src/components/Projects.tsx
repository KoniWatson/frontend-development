function Projects() {
  const projects = [
    {
      title: "web development",
      thumbnail: "https://placehold.co/300x400",
      colour: "#202c39",
      text: "#f29559",
    },
    {
      title: "figma prototypes",
      thumbnail: "https://placehold.co/300x400",
      colour: "#b8b08d",
      text: "#202c39",
    },
    {
      title: "game designs",
      thumbnail: "https://placehold.co/300x400",
      colour: "#283845",
      text: "#f29559",
    },
    {
      title: "the unknown",
      thumbnail: "https://placehold.co/300x400",
      colour: "#f2d492",
      text: "#202c39",
    },
  ];

  return (
    <div className="projects">
      {projects.map((proj) => {
        return (
          // <section className="project-section parallax">
          <section
            className="project-section"
            style={{ background: proj.colour }}
          >
            {/* <div className="parallax-layer layer1" />
            <div className="parallax-layer layer2" />
            <div className="parallax-layer layer3" /> */}

            <div className="project-section-link">
              <h2 style={{color: proj.text}}>{proj.title}</h2>
              <img width={300} height={400} src={proj.thumbnail} />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Projects;
