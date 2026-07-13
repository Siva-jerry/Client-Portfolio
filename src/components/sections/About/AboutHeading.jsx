import { usePortfolio } from "../../../context/PortfolioContext";

export default function AboutHeading() {

    const { about } = usePortfolio();

    if (!about) return null;

    return (

        <div
            id="about-heading"
            className="about-heading"
        >

            <span
                id="about-subtitle"
                className="about-subtitle"
            >

                {about.subtitle}

            </span>

            <h2
                id="about-title"
                className="about-title"
            >

                {about.title}

            </h2>

        </div>

    );

}