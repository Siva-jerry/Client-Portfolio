import "./Testimonials.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import TestimonialsHeading from "./TestimonialsHeading";
import TestimonialsSlider from "./TestimonialsSlider";

function Testimonials() {

    const {
        testimonials,
        loading,
    } = usePortfolio();

    return (

        <section
            id="testimonials"
            className="testimonials-section"
        >

            <div className="testimonials-container">

                <TestimonialsHeading />

                {
                    loading ? (

                        <div className="testimonials-loading">

                            Loading testimonials...

                        </div>

                    ) : testimonials.length > 0 ? (

                        <TestimonialsSlider
                            testimonials={testimonials}
                        />

                    ) : (

                        <div className="testimonials-empty">

                            <h3>
                                No Testimonials Yet
                            </h3>

                            <p>
                                Testimonials added from your admin
                                panel will automatically appear
                                here.
                            </p>

                        </div>

                    )
                }

            </div>

        </section>

    );

}

export default Testimonials;