import {
    FiMapPin,
    FiBookOpen,
    FiBriefcase,
    FiHeart,
} from "react-icons/fi";

import { usePortfolio } from "../../../context/PortfolioContext";

export default function AboutInfoGrid() {

    const { about } = usePortfolio();

    if (!about?.aboutCards) return null;

    function getIcon(icon) {

        switch (icon) {

            case "location":
                return <FiMapPin />;

            case "education":
                return <FiBookOpen />;

            case "status":
                return <FiBriefcase />;

            case "passion":
                return <FiHeart />;

            default:
                return <FiHeart />;

        }

    }

    return (

        <div
            id="about-info-grid"
            className="about-info-grid"
        >

            {about.aboutCards.map((card, index) => (

                <div

                    key={index}

                    className="about-info-card"

                >

                    <div className="about-info-icon">

                        {getIcon(card.icon)}

                    </div>

                    <div className="about-info-content">

                        <h3 className="about-info-title">

                            {card.title}

                        </h3>

                        <p className="about-info-value">

                            {card.value}

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

}