import {
    FiGithub,
    FiLinkedin,
    FiInstagram,
    FiFileText,
    FiArrowUpRight,
    FiGlobe,
} from "react-icons/fi";
import { usePortfolio } from "../../../context/PortfolioContext";

function FooterSocials({ footer: propFooter }) {
    const { footer: ctxFooter, contact, hero } = usePortfolio();
    const footer = propFooter || ctxFooter;

    const github = footer?.github || contact?.github;
    const linkedin = footer?.linkedin || contact?.linkedin;
    const instagram = footer?.instagram || contact?.instagram;
    const resume = footer?.resume || contact?.resume || hero?.resumeUrl;
    const website = contact?.website;

    const socials = [
        {
            name: "GitHub",
            icon: <FiGithub />,
            url: github,
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            url: linkedin,
        },
        {
            name: "Instagram",
            icon: <FiInstagram />,
            url: instagram,
        },
        {
            name: "Resume",
            icon: <FiFileText />,
            url: resume,
        },
        {
            name: "Website",
            icon: <FiGlobe />,
            url: website,
        },
    ].filter((item) => Boolean(item.url && item.url.trim() !== ""));

    const displaySocials = socials.length > 0 ? socials : [
        {
            name: "GitHub",
            icon: <FiGithub />,
            url: "https://github.com/nimalp511",
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            url: "https://www.linkedin.com/in/nimaldap-it",
        },
        {
            name: "Instagram",
            icon: <FiInstagram />,
            url: "https://instagram.com",
        },
    ];

    return (
        <div className="footer-socials">
            <h3 className="footer-title">
                Connect
            </h3>

            <p className="footer-social-description">
                Let's connect through social platforms and explore new opportunities together.
            </p>

            <div className="footer-social-list">
                {displaySocials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                    >
                        <span className="footer-social-icon">
                            {social.icon}
                        </span>

                        <span className="footer-social-name">
                            {social.name}
                        </span>

                        <FiArrowUpRight className="footer-social-arrow" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterSocials;