import "./Stars.css";

export default function Stars() {

    const stars = Array.from({ length: 120 });

    return (

        <div className="stars-wrapper">

            {

                stars.map((_, index) => {

                    const size = Math.random() * 4 + 1;

                    const left = Math.random() * 100;

                    const top = Math.random() * 100;

                    const duration = Math.random() * 5 + 4;

                    const delay = Math.random() * 6;

                    const opacity = Math.random() * .6 + .2;

                    return (

                        <span

                            key={index}

                            className="star"

                            style={{

                                width: `${size}px`,

                                height: `${size}px`,

                                left: `${left}%`,

                                top: `${top}%`,

                                animationDuration: `${duration}s`,

                                animationDelay: `${delay}s`,

                                opacity

                            }}

                        />

                    );

                })

            }

        </div>

    );

}