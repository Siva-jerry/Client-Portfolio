import {
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

export default function ProjectButtons({

    github,

    live,

}) {

    return (

        <div
            className="project-buttons"
        >

            {

                github && (

                    <a

                        href={github}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="project-btn project-btn-secondary"

                    >

                        <FiGithub />

                        <span>

                            GitHub

                        </span>

                    </a>

                )

            }

            {

                live && (

                    <a

                        href={live}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="project-btn project-btn-primary"

                    >

                        <span>

                            Live Demo

                        </span>

                        <FiExternalLink />

                    </a>

                )

            }

        </div>

    );

}