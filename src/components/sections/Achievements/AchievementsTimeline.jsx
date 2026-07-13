import AchievementCard from "./AchievementCard";

export default function AchievementsTimeline({

    achievements = [],

}) {

    if (achievements.length === 0) {

        return (

            <div className="achievement-empty">

                <h3>

                    No Achievements Found

                </h3>

                <p>

                    Add achievements from your Admin Panel
                    to showcase your accomplishments here.

                </p>

            </div>

        );

    }

    return (

        <div

            id="achievement-timeline"

            className="achievement-timeline"

        >

            <div
                className="achievement-line"
            ></div>

            {

                achievements.map((achievement, index) => (

                    <AchievementCard

                        key={achievement.id || index}

                        achievement={achievement}

                        index={index}

                    />

                ))

            }

        </div>

    );

}