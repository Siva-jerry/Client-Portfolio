import { useMemo, useState } from "react";

import "./Projects.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import ProjectsHeading from "./ProjectsHeading";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {

    const { projects } = usePortfolio();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = useMemo(() => {

        if (!projects || projects.length === 0) {

            return ["All"];

        }

        return [

            "All",

            ...new Set(projects.map(project => project.category))

        ];

    }, [projects]);

    const filteredProjects = useMemo(() => {

        if (selectedCategory === "All") {

            return projects;

        }

        return projects.filter(

            project => project.category === selectedCategory

        );

    }, [projects, selectedCategory]);

    return (

        <section
            id="projects"
            className="projects-section"
        >

            <div className="projects-container">

                <ProjectsHeading />

                <ProjectsFilter

                    categories={categories}

                    selectedCategory={selectedCategory}

                    setSelectedCategory={setSelectedCategory}

                />

                <ProjectsGrid

                    projects={filteredProjects}

                />

            </div>

        </section>

    );

}