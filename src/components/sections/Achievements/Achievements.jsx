import "./Achievements.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import AchievementsHeading from "./AchievementsHeading";
import AchievementsTimeline from "./AchievementsTimeline";

export default function Achievements() {

    const { achievements } = usePortfolio();

    return (

        <section
            id="achievements"
            className="achievement-section"
        >

            <div className="achievement-container">

                {/* Section Heading */}

                <AchievementsHeading />

                {/* Timeline */}

                <AchievementsTimeline
                    achievements={achievements}
                />

            </div>

        </section>

    );

}