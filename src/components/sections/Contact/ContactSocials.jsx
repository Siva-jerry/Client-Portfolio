import {
    FiGithub,
    FiLinkedin,
    FiInstagram,
    FiFileText,
    FiArrowUpRight,
} from "react-icons/fi";

function ContactSocials({ contact }) {

    if (!contact) return null;

    const socialLinks = [

        {
            icon: <FiGithub />,
            title: "GitHub",
            url: contact.github,
        },

        {
            icon: <FiLinkedin />,
            title: "LinkedIn",
            url: contact.linkedin,
        },

        {
            icon: <FiInstagram />,
            title: "Instagram",
            url: contact.instagram,
        },

        {
            icon: <FiFileText />,
            title: "Resume",
            url: contact.resume,
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

                {

                    socialLinks.map((social) => (

                        social.url && (

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

                        )

                    ))

                }

            </div>

        </div>

    );

}

export default ContactSocials;