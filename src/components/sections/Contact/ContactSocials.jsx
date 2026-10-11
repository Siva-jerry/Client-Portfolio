import {
    FiGithub,
    FiLinkedin,
    FiInstagram,
    FiFileText,
    FiArrowUpRight,
    FiGlobe,
} from "react-icons/fi";
import { usePortfolio } from "../../../context/PortfolioContext";

function ContactSocials({ contact: propContact }) {
    const { contact: ctxContact, footer, hero } = usePortfolio();
    const contact = propContact || ctxContact;

    const github = contact?.github || footer?.github;
    const linkedin = contact?.linkedin || footer?.linkedin;
    const instagram = contact?.instagram || footer?.instagram;
    const resume = contact?.resume || footer?.resume || hero?.resumeUrl;
    const website = contact?.website;

    const socialLinks = [
        {
            icon: <FiGithub />,
            title: "GitHub",
            url: github,
        },
        {
            icon: <FiLinkedin />,
            title: "LinkedIn",
            url: linkedin,
        },
        {
            icon: <FiInstagram />,
            title: "Instagram",
            url: instagram,
        },
        {
            icon: <FiFileText />,
            title: "Resume",
            url: resume,
        },
        {
            icon: <FiGlobe />,
            title: "Website",
            url: website,
        },
    ].filter((item) => Boolean(item.url && item.url.trim() !== ""));

    // If completely empty in database, provide developer profile defaults
    const displayLinks = socialLinks.length > 0 ? socialLinks : [
        {
            icon: <FiGithub />,
            title: "GitHub",
            url: "https://github.com/nimalp511",
        },
        {
            icon: <FiLinkedin />,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/nimaldap-it",
        },
        {
            icon: <FiInstagram />,
            title: "Instagram",
            url: "https://instagram.com",
        },
    ];

    return (
        <div className="contact-socials">
            <h3 className="contact-socials-title">
                Connect With Me
            </h3>

            <p className="contact-socials-description">
                Follow my journey, explore my work,
                or download my latest resume.
            </p>

            <div className="contact-socials-list">
                {displayLinks.map((social) => (
                    <a
                        key={social.title}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                    >
                        <div className="contact-social-left">
                            <span className="contact-social-icon">
                                {social.icon}
                            </span>
                            <span className="contact-social-name">
                                {social.title}
                            </span>
                        </div>
                        <FiArrowUpRight className="contact-social-arrow" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ContactSocials;