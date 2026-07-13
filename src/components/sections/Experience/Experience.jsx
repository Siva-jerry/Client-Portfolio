import { useMemo, useState } from "react";

import "./Experience.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import ExperienceHeading from "./ExperienceHeading";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {

    const { experience = [] } = usePortfolio();

    const [selectedType, setSelectedType] = useState("All");

    const experienceTypes = useMemo(() => {

        if (!experience.length) {

            return ["All"];

        }

        return [

            "All",

            ...new Set(

                experience.map(

                    (item) => item.employmentType

                )

            ),

        ];

    }, [experience]);

    const filteredExperience = useMemo(() => {

        if (selectedType === "All") {

            return experience;

        }

        return experience.filter(

            (item) => item.employmentType === selectedType

        );

    }, [experience, selectedType]);

    return (

        <section

            id="experience"

            className="experience-section"

        >

            <div className="experience-container">

                <ExperienceHeading />

                <div className="experience-filter">

                    {

                        experienceTypes.map((type) => (

                            <button

                                key={type}

                                type="button"

                                className={

                                    selectedType === type

                                        ? "experience-filter-btn active"

                                        : "experience-filter-btn"

                                }

                                onClick={() =>

                                    setSelectedType(type)

                                }

                            >

                                {type}

                            </button>

                        ))

                    }

                </div>

                <ExperienceTimeline

                    experience={filteredExperience}

                />

            </div>

        </section>

    );

}