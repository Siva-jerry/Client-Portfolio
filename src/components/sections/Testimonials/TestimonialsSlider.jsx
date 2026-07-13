import TestimonialCard from "./TestimonialCard";

function TestimonialsSlider({ testimonials }) {

    const sortedTestimonials = [...testimonials].sort(
        (a, b) => (a.order || 0) - (b.order || 0)
    );

    return (

        <div className="testimonials-slider-wrapper">

            <div className="testimonials-slider">

                {sortedTestimonials.map((testimonial) => (

                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                    />

                ))}

            </div>

        </div>

    );

}

export default TestimonialsSlider;