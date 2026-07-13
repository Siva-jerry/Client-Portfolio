import "./Skills.css";

import SkillsHeading from "./SkillsHeading";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {

    return (

        <section
            id="skills"
            className="skills-section"
        >

            <div className="skills-container">

                <SkillsHeading />

                <SkillsGrid />

            </div>

        </section>

    );

}