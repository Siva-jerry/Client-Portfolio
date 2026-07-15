import {
    FiArrowUp,
    FiHeart,
} from "react-icons/fi";

function FooterBottom({ footer }) {

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth",

        });

    };

    const currentYear = new Date().getFullYear();

    return (

        <div className="footer-bottom">

            <div className="footer-bottom-divider"></div>

            <div className="footer-bottom-content">

                <div className="footer-bottom-left">

                    <p className="footer-copyright">

                        {

                            footer?.copyright ||

                            `© ${currentYear} Nimalda P. All Rights Reserved.`

                        }

                    </p>

                    <p className="footer-made-with">

                        Made with

                        <FiHeart />

                        using React, Firebase & Supabase

                    </p>

                </div>

                <button

                    type="button"

                    className="footer-top-button"

                    onClick={scrollToTop}

                >

                    <span>

                        Back to Top

                    </span>

                    <FiArrowUp />

                </button>

            </div>

        </div>

    );

}

export default FooterBottom;