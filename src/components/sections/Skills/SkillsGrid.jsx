import { usePortfolio } from "../../../context/PortfolioContext";

import SkillCard from "./SkillCard";

export default function SkillsGrid() {

    const { skills, loading } = usePortfolio();

    if (loading) {

        return null;

    }

    if (!skills || skills.length === 0) {

        return (

            <div className="skills-empty-state">

                No skills found.

            </div>

        );

    }

    return (

        <div
            id="skills-grid"
            className="skills-grid"
        >

            {

                skills.map((skill) => (

                    <SkillCard

                        key={skill.id}

                        skill={skill}

                    />

                ))

            }

        </div>

    );

}