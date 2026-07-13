import { FiArrowRight, FiDownload } from "react-icons/fi";

import { usePortfolio } from "../../../context/PortfolioContext";

export default function HeroButtons() {

    const { hero } = usePortfolio();

    if (!hero) return null;

    function handleProjects() {

        if (!hero.primaryButtonLink) return;

        const element = document.querySelector(
            hero.primaryButtonLink
        );

        if (element) {

            element.scrollIntoView({
                behavior: "smooth",
            });

        }

    }

    function handleDownload() {

        if (!hero.resumeUrl) {

            alert("Resume will be uploaded soon.");

            return;

        }

        window.open(
            hero.resumeUrl,
            "_blank"
        );

    }

    return (

        <div
            className="hero-buttons-wrapper"
        >

            <button
                className="hero-primary-button"
                onClick={handleProjects}
            >

                {hero.primaryButtonText}

                <FiArrowRight />

            </button>

            <button
                className="hero-secondary-button"
                onClick={handleDownload}
            >

                {hero.secondaryButtonText}

                <FiDownload />

            </button>

        </div>

    );

}