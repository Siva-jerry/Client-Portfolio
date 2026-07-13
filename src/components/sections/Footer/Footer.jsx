import "./Footer.css";

import { usePortfolio } from "../../../context/PortfolioContext";

import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";
import FooterBottom from "./FooterBottom";

function Footer() {

    const { footer } = usePortfolio();

    if (!footer) return null;

    return (

        <footer
            id="footer"
            className="footer"
        >

            <div className="footer-top-line"></div>

            <div className="footer-bg-circle footer-circle-1"></div>

            <div className="footer-bg-circle footer-circle-2"></div>

            <div className="footer-container">

                <div className="footer-grid">

                    <FooterBrand
                        footer={footer}
                    />

                    <FooterNavigation />

                    <FooterSocials
                        footer={footer}
                    />

                </div>

                <FooterBottom
                    footer={footer}
                />

            </div>

        </footer>

    );

}

export default Footer;