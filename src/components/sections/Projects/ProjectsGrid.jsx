import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {

    if (!projects || projects.length === 0) {

        return (

            <div className="projects-empty">

                <h3>

                    No Projects Found

                </h3>

                <p>

                    Projects added from the Admin Panel
                    will appear here automatically.

                </p>

            </div>

        );

    }

    return (

        <div
            id="projects-grid"
            className="projects-grid"
        >

            {

                projects
                    .sort(
                        (a, b) =>

                            (a.order ?? 999) -

                            (b.order ?? 999)
                    )
                    .map((project, index) => (

                        <ProjectCard

                            key={project.id}

                            project={project}

                            index={index}

                        />

                    ))

            }

        </div>

    );

}