import { FiArrowUpRight } from "react-icons/fi";

function FooterNavigation() {

    const links = [

        {
            label: "Home",
            id: "hero",
        },

        {
            label: "About",
            id: "about",
        },

        {
            label: "Skills",
            id: "skills",
        },

        {
            label: "Projects",
            id: "projects",
        },

        {
            label: "Experience",
            id: "experience",
        },

        {
            label: "Certificates",
            id: "certificates",
        },

        {
            label: "Gallery",
            id: "gallery",
        },

        {
            label: "Achievements",
            id: "achievements",
        },

        {
            label: "Testimonials",
            id: "testimonials",
        },

        {
            label: "Contact",
            id: "contact",
        },

    ];

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({

            behavior: "smooth",

            block: "start",

        });

    };

    return (

        <div className="footer-navigation">

            <h3 className="footer-title">

                Navigation

            </h3>

            <ul className="footer-nav-list">

                {

                    links.map((link) => (

                        <li
                            key={link.id}
                            className="footer-nav-item"
                        >

                            <button

                                type="button"

                                className="footer-nav-link"

                                onClick={() =>
                                    scrollToSection(link.id)
                                }

                            >

                                <span>

                                    {link.label}

                                </span>

                                <FiArrowUpRight />

                            </button>

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default FooterNavigation;