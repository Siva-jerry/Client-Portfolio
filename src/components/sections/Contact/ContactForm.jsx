import { useState } from "react";
import {
    FiArrowUpRight,
    FiSend,
} from "react-icons/fi";

function ContactForm() {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        subject: "",

        message: "",

    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previous) => ({

            ...previous,

            [name]: value,

        }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        /*
        ==========================================
        EmailJS Integration
        We'll connect this later.
        ==========================================
        */

        console.log(formData);

        alert("EmailJS integration will be added next.");

        setFormData({

            name: "",

            email: "",

            subject: "",

            message: "",

        });

    };

    return (

        <form

            className="contact-form"

            onSubmit={handleSubmit}

        >

            <div className="contact-form-header">

                <span className="contact-form-tag">

                    SEND MESSAGE

                </span>

                <h3 className="contact-form-title">

                    Start a Conversation

                </h3>

            </div>

            <div className="contact-form-group">

                <label>

                    Full Name

                </label>

                <input

                    type="text"

                    name="name"

                    placeholder="Enter your name"

                    value={formData.name}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="contact-form-group">

                <label>

                    Email Address

                </label>

                <input

                    type="email"

                    name="email"

                    placeholder="Enter your email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="contact-form-group">

                <label>

                    Subject

                </label>

                <input

                    type="text"

                    name="subject"

                    placeholder="Project / Internship"

                    value={formData.subject}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="contact-form-group">

                <label>

                    Message

                </label>

                <textarea

                    rows="6"

                    name="message"

                    placeholder="Tell me about your project..."

                    value={formData.message}

                    onChange={handleChange}

                    required

                />

            </div>

            <button

                type="submit"

                className="contact-submit-btn"

            >

                <FiSend />

                <span>

                    Send Message

                </span>

                <FiArrowUpRight />

            </button>

        </form>

    );

}

export default ContactForm;