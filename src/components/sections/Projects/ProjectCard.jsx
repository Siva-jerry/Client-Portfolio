import { FiStar } from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({ project }) {

   const imageUrl = project.image || "";

    return (

        <article
            className="project-card"
        >

            {

                project.featured && (

                    <div className="project-featured">

                        <FiStar />

                        Featured

                    </div>

                )

            }

            <div className="project-content">

                <span className="project-category">

                    {project.category}

                </span>

                <h3 className="project-title">

                    {project.title}

                </h3>

                <p className="project-description">

                    {project.description}

                </p>

                <div className="project-technologies">

                    {

                        project.technologies?.map((tech) => (

                            <span

                                key={tech}

                                className="project-tech-chip"

                            >

                                {tech}

                            </span>

                        ))

                    }

                </div>

                <ProjectButtons

                    github={project.github}

                    live={project.live}

                />

            </div>

            <div className="project-image-wrapper">

                <img

                    src={imageUrl}

                    alt={project.title}

                    className="project-image"

                />

            </div>

        </article>

    );

}