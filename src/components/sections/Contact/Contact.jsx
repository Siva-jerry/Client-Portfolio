import "./Contact.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

function Contact() {

    const {

        contact,

        loading,

    } = usePortfolio();

    if (loading) {

        return null;

    }

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-container">

                <ContactHeading />

                <div className="contact-layout">

                    <div className="contact-left">

                        <ContactInfo
                            contact={contact}
                        />

                        <ContactSocials
                            contact={contact}
                        />

                    </div>

                    <div className="contact-right">

                        <ContactForm
                            contact={contact}
                        />

                    </div>

                </div>

            </div>

            <div className="contact-blob contact-blob-one"></div>

            <div className="contact-blob contact-blob-two"></div>

            <div className="contact-grid-lines"></div>

        </section>

    );

}

export default Contact;