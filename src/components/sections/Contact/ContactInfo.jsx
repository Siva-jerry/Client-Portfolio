import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGlobe,
    FiArrowUpRight,
} from "react-icons/fi";

function ContactInfo({ contact }) {

    if (!contact) return null;

    const contactItems = [

   {
    icon: <FiMail />,
    label: "Email",
    value: contact.email,
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Portfolio%20Enquiry&body=Hi%20Subiksha,%0A%0AI%20visited%20your%20portfolio.`,
},

        {
            icon: <FiPhone />,
            label: "Phone",
            value: contact.phone,
            link: `tel:${contact.phone}`,
        },

        {
            icon: <FiMapPin />,
            label: "Location",
            value: contact.location,
            link: null,
        },

        {
            icon: <FiGlobe />,
            label: "Website",
            value: contact.website,
            link: contact.website,
        },

    ];

    return (

        <div className="contact-info">

            <h3 className="contact-info-title">

                Contact Information

            </h3>

            <p className="contact-info-text">

                Feel free to reach out through any of the following
                contact methods. I'll get back to you as soon as
                possible.

            </p>

            <div className="contact-info-list">

                {

                    contactItems.map((item, index) => (

                        <div
                            key={index}
                            className="contact-info-row"
                        >

                            <div className="contact-info-icon">

                                {item.icon}

                            </div>

                            <div className="contact-info-content">

                                <span className="contact-info-label">

                                    {item.label}

                                </span>

                                {

                                    item.link ? (

                                        <a
                                            href={item.link}
                                            target={
                                                item.label === "Website"
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel="noopener noreferrer"
                                            className="contact-info-link"
                                        >

                                            {item.value}

                                            <FiArrowUpRight />

                                        </a>

                                    ) : (

                                        <span className="contact-info-value">

                                            {item.value}

                                        </span>

                                    )

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default ContactInfo;