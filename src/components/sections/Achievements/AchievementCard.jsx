import {
    FiAward,
    FiCalendar,
    FiStar,
} from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function AchievementCard({

    achievement,

    index,

}) {

    const imageUrl = achievement.image

        ? getSupabaseImageUrl(

            achievement.image

        )

        : "";

    return (

        <article

            id={`achievement-card-${index}`}

            className="achievement-card"

        >

            <div className="achievement-dot"></div>

            {

                achievement.featured === true ||

                achievement.featured === "true"

                    ? (

                        <span

                            className="achievement-featured"

                        >

                            <FiStar />

                            Featured

                        </span>

                    )

                    : null

            }

            <div

                className="achievement-image-wrapper"

            >

                <img

                    src={imageUrl}

                    alt={achievement.title}

                    className="achievement-image"

                />

            </div>

            <div

                className="achievement-content"

            >

                <div

                    className="achievement-header"

                >

                    <div>

                        <span

                            className="achievement-organization"

                        >

                            {achievement.organization}

                        </span>

                        <h3

                            className="achievement-card-title"

                        >

                            {achievement.title}

                        </h3>

                    </div>

                    <span

                        className="achievement-badge"

                    >

                        <FiAward />

                        {achievement.badge}

                    </span>

                </div>

                <div

                    className="achievement-date"

                >

                    <FiCalendar />

                    <span>

                        {achievement.date}

                    </span>

                </div>

                <p

                    className="achievement-text"

                >

                    {achievement.description}

                </p>

            </div>

        </article>

    );

}