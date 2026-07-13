import {
    FiMapPin,
    FiCalendar,
    FiBriefcase,
} from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function ExperienceCard({

    experience,

    index,

}) {

    const logoUrl = experience.image

        ? getSupabaseImageUrl(experience.image)

        : "";

    return (

        <article

            id={`experience-card-${index}`}

            className="experience-card"

        >

            <div className="experience-card-dot"></div>

            <div className="experience-card-logo">

                <img

                    src={logoUrl}

                    alt={experience.company}

                    className="experience-company-image"

                />

            </div>

            <div className="experience-card-content">

                <div className="experience-card-header">

                    <div>

                        <span className="experience-company">

                            {experience.company}

                        </span>

                        <h3 className="experience-role">

                            {experience.role}

                        </h3>

                    </div>

                    <span className="experience-type">

                        {experience.employmentType}

                    </span>

                </div>

                <div className="experience-meta">

                    <span>

                        <FiCalendar />

                        {experience.startDate}

                        {" - "}

                        {experience.endDate}

                    </span>

                    <span>

                        <FiMapPin />

                        {experience.location}

                    </span>

                    <span>

                        <FiBriefcase />

                        {experience.employmentType}

                    </span>

                </div>

                <p className="experience-summary">

                    {experience.description}

                </p>

                <div className="experience-technologies">

                    {

                        experience.technologies?.map((tech) => (

                            <span

                                key={tech}

                                className="experience-chip"

                            >

                                {tech}

                            </span>

                        ))

                    }

                </div>

            </div>

        </article>

    );

}