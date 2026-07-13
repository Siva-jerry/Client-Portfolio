import { useEffect, useState } from "react";

import { usePortfolio } from "../../../context/PortfolioContext";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {

    const { hero, loading } = usePortfolio();

    const [text, setText] = useState("");

    const [professionIndex, setProfessionIndex] = useState(0);

    useEffect(() => {

        if (!hero?.professions || hero.professions.length === 0) return;

        let characterIndex = 0;

        const currentProfession =
            hero.professions[professionIndex];

        setText("");

        const typingInterval = setInterval(() => {

            setText(
                currentProfession.slice(
                    0,
                    characterIndex + 1
                )
            );

            characterIndex++;

            if (characterIndex === currentProfession.length) {

                clearInterval(typingInterval);

                setTimeout(() => {

                    setProfessionIndex((previous) =>

                        (previous + 1) %

                        hero.professions.length

                    );

                }, 1800);

            }

        }, 80);

        return () => clearInterval(typingInterval);

    }, [professionIndex, hero]);

    if (loading) {

        return null;

    }

    if (!hero) {

        return null;

    }

    return (

        <div className="hero-content-wrapper">

            <div className="hero-content-badge">

                {hero.greeting}

            </div>

            <h1 className="hero-content-title">

                {hero.firstName}

                <span>

                    {" "}

                    {hero.lastName}

                </span>

            </h1>

            <h2 className="hero-content-profession">

                {text}

                <span className="hero-content-cursor">

                    |

                </span>

            </h2>

            <p className="hero-content-description">

                {hero.description}

            </p>

            <HeroButtons />

        </div>

    );

}