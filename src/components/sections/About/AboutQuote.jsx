import { FiMessageCircle } from "react-icons/fi";

import { usePortfolio } from "../../../context/PortfolioContext";

export default function AboutQuote() {

    const { about } = usePortfolio();

    if (!about) return null;

    return (

        <div className="about-quote-wrapper">

            <div className="about-quote-card">

                <div className="about-quote-icon">

                    <FiMessageCircle />

                </div>

                <p className="about-quote-text">

                    "{about.quote}"

                </p>

            </div>

        </div>

    );

}