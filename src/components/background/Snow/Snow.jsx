import "./Snow.css";

export default function Snow() {

    const flakes = Array.from({ length: 90 });

    return (

        <div className="snow-wrapper">

            {

                flakes.map((_, index) => {

                    const size = Math.random() * 8 + 2;

                    const left = Math.random() * 100;

                    const duration = Math.random() * 12 + 12;

                    const delay = Math.random() * 15;

                    const opacity = Math.random() * .6 + .2;

                    const blur = Math.random() * 3;

                    return (

                        <span

                            key={index}

                            className="snow"

                            style={{

                                width: `${size}px`,

                                height: `${size}px`,

                                left: `${left}%`,

                                animationDuration: `${duration}s`,

                                animationDelay: `${delay}s`,

                                opacity,

                                filter: `blur(${blur}px)`

                            }}

                        />

                    );

                })

            }

        </div>

    );

}