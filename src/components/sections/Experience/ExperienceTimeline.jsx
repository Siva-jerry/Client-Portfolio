import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline({

    experience = [],

}) {

    if (experience.length === 0) {

        return (

            <div className="experience-empty">

                <h3>

                    No Experience Found

                </h3>

                <p>

                    No experience records are available for this category.

                </p>

            </div>

        );

    }

    return (

        <div
            id="experience-timeline"
            className="experience-timeline"
        >

            <div className="experience-line"></div>

            {

                experience.map((item, index) => (

                    <ExperienceCard

                        key={item.id || index}

                        experience={item}

                        index={index}

                    />

                ))

            }

        </div>

    );

}