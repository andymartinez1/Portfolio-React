export default function Projects() {
  const panels = document.querySelectorAll(".project-panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  return (
    <section className="projects">
      <h1 className="project-title">My Projects</h1>

      <div className="project-container">
        <div className="project-panel active">
          <h3 className="project-title">Project 1</h3>
        </div>

        <div className="project-panel ">
          <h3 className="project-title">Project 2</h3>
        </div>

        <div className="project-panel ">
          <h3 className="project-title">Project 3</h3>
        </div>

        <div className="project-panel ">
          <h3 className="project-title">Project 4</h3>
        </div>

        <div className="project-panel ">
          <h3 className="project-title">Project 5</h3>
        </div>
      </div>
    </section>
  );
}
