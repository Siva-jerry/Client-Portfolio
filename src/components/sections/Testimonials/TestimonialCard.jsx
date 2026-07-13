import {
    FiMessageSquare,
    FiStar,
} from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function TestimonialCard({

    testimonial,

}) {

    const imageUrl = testimonial.image

        ? getSupabaseImageUrl(

            testimonial.image

        )

        : "";

    const rating = Number(

        testimonial.rating || 5

    );

    return (

        <article

            className="testimonial-card"

        >

            {

                testimonial.featured === true ||

                testimonial.featured === "true"

                    ? (

                        <span

                            className="testimonial-featured"

                        >

                            Featured

                        </span>

                    )

                    : null

            }

            <div

                className="testimonial-quote"

            >

                <FiMessageSquare />

            </div>

            <div

                className="testimonial-profile"

            >

                <div

                    className="testimonial-image-wrapper"

                >

                    <img

                        src={imageUrl}

                        alt={testimonial.name}

                        className="testimonial-image"

                    />

                </div>

                <div

                    className="testimonial-user"

                >

                    <h3

                        className="testimonial-name"

                    >

                        {testimonial.name}

                    </h3>

                    <p

                        className="testimonial-role"

                    >

                        {testimonial.role}

                    </p>

                    <span

                        className="testimonial-company"

                    >

                        {testimonial.company}

                    </span>

                </div>

            </div>

            <div

                className="testimonial-stars"

            >

                {

                    [...Array(rating)].map((_, index) => (

                        <FiStar

                            key={index}

                            className="testimonial-star"

                        />

                    ))

                }

            </div>

            <p

                className="testimonial-message"

            >

                "{testimonial.message}"

            </p>

        </article>

    );

}