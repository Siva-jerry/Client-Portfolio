import { usePortfolio } from "../../../context/PortfolioContext";

export default function AboutDescription() {

    const { about } = usePortfolio();

    if (!about) return null;

    return (

        <div className="about-description-wrapper">

            <div className="about-description-card">

                <p className="about-description-text">

                    {about.description}

                </p>

            </div>

        </div>

    );

}