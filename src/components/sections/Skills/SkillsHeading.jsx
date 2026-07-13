import { usePortfolio } from "../../../context/PortfolioContext";

export default function SkillsHeading() {

    const { skills } = usePortfolio();

    if (!skills || skills.length === 0) return null;

    return (

        <div className="skills-heading">

            <span className="skills-subtitle">

                MY EXPERTISE

            </span>

            <h2 className="skills-title">

                Skills & Technologies

            </h2>

            <p className="skills-description">

                Technologies and tools I use to build modern,
                scalable and high-performance applications.

            </p>

        </div>

    );

}