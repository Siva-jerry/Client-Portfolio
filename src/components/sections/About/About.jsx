import "./About.css";

import AboutHeading from "./AboutHeading";
import AboutQuote from "./AboutQuote";
import AboutDescription from "./AboutDescription";
import AboutInfoGrid from "./AboutInfoGrid";

export default function About() {

    return (

        <section
            id="about"
            className="about-section"
        >
            

            <div className="about-container">

                <AboutHeading />

                <AboutQuote />

                <AboutDescription />

                <AboutInfoGrid />

            </div>

        </section>

    );

}