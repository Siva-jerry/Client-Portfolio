import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroSocial from "./HeroSocial";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {

    return (

        <section
            id="home"
            className="hero-section"
        >
            

<div className="hero-decoration hero-decoration-cube"></div>

<div className="hero-decoration hero-decoration-sphere"></div>

<div className="hero-decoration hero-decoration-glass"></div>

<div className="hero-decoration hero-decoration-star hero-star-1"></div>

<div className="hero-decoration hero-decoration-star hero-star-2"></div>

<div className="hero-decoration hero-decoration-star hero-star-3"></div>

<div className="hero-decoration hero-decoration-star hero-star-4"></div>

<div className="hero-decoration hero-decoration-star hero-star-5"></div>

            <HeroSocial />

            <div className="hero-container">

    <div className="hero-left-content">

        <HeroContent />

    </div>

    <div className="hero-right-content">

        <HeroImage />

    </div>

    <HeroStats />

</div>


        </section>

    );

}