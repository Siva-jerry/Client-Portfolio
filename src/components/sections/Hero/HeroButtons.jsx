import { FiArrowRight, FiDownload } from "react-icons/fi";
import { usePortfolio } from "../../../context/PortfolioContext";

export default function HeroButtons() {
    const { hero, contact, footer } = usePortfolio();

    if (!hero) return null;

    function handleProjects() {
        if (!hero.primaryButtonLink) return;

        const element = document.querySelector(hero.primaryButtonLink);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    }

    function handleDownload() {
        const resumeUrl = hero.resumeUrl || contact?.resume || footer?.resume;

        if (!resumeUrl) {
            alert("Resume will be uploaded soon.");
            return;
        }

        window.open(resumeUrl, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="hero-buttons-wrapper">
            <button
                className="hero-primary-button"
                onClick={handleProjects}
            >
                {hero.primaryButtonText || "Explore Work"}
                <FiArrowRight />
            </button>

            <button
                className="hero-secondary-button"
                onClick={handleDownload}
            >
                {hero.secondaryButtonText || "Download CV"}
                <FiDownload />
            </button>
        </div>
    );
}