import placeholderImage from "../../../assets/images/hero/profile.png";

import { HiSparkles } from "react-icons/hi2";

import { usePortfolio } from "../../../context/PortfolioContext";

export default function HeroImage() {

    const { hero } = usePortfolio();

    const imageSource =
        hero?.imageUrl && hero.imageUrl.trim() !== ""
            ? hero.imageUrl
            : placeholderImage;

    return (

        <div className="hero-image-shell">

            {/* Aurora */}
            <div className="hero-image-orb"></div>

            {/* Circle Ring */}
            <div className="hero-image-ring"></div>

            {/* Decorative Circle */}
            <div className="hero-image-ring hero-image-ring-two"></div>

            {/* Floating Spark */}
            <div className="hero-floating-star hero-star-one">
                <HiSparkles />
            </div>

            <div className="hero-floating-star hero-star-two">
                <HiSparkles />
            </div>

            <div className="hero-floating-star hero-star-three">
                <HiSparkles />
            </div>

            {/* Glass Image */}

            <div className="hero-image-frame">

                <img
                    src={imageSource}
                    alt="Hero"
                    className="hero-image-photo"
                />

                <div className="hero-image-shine"></div>

            </div>

        </div>

    );

}