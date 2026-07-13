import {
    FiGithub,
    FiLinkedin,
    FiInstagram,
    FiFileText,
    FiArrowUpRight,
} from "react-icons/fi";

function FooterSocials({ footer }) {

    if (!footer) return null;

    const socials = [

        {
            name: "GitHub",
            icon: <FiGithub />,
            url: footer.github,
        },

        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            url: footer.linkedin,
        },

        {
            name: "Instagram",
            icon: <FiInstagram />,
            url: footer.instagram,
        },

        {
            name: "Resume",
            icon: <FiFileText />,
            url: footer.resume,
        },

    ];

    return (

        <div className="footer-socials">

            <h3 className="footer-title">

                Connect

            </h3>

            <p className="footer-social-description">

                Let's connect through social platforms and
                explore new opportunities together.

            </p>

            <div className="footer-social-list">

                {

                    socials.map((social) => (

                        social.url && (

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

                                <FiArrowUpRight

                                    className="footer-social-arrow"

                                />

                            </a>

                        )

                    ))

                }

            </div>

        </div>

    );

}

export default FooterSocials;