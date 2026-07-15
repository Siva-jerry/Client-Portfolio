import "./Navbar.css";

import { navLinks } from "../../../data/navigation";

export default function Navbar(){

    return(

        <header className="navbar">

            <div className="container navbar-container">

                <a
                    href="#home"
                    className="navbar-logo"
                >

                    <span>Nimalda P</span>

                </a>

                <nav className="navbar-menu">

                    {

                        navLinks.map((link)=>(

                            <a
                                key={link.id}
                                href={link.href}
                            >

                                {link.title}

                            </a>

                        ))

                    }

                </nav>

                <div className="navbar-actions">

                   {/* <button
                        className="theme-btn"
                    >

                        🌙

                    </button>*/}

                    <button
    className="hire-btn"
    onClick={() => {

        document
            .getElementById("contact")
            ?.scrollIntoView({

                behavior:"smooth"

            });

    }}
>

    Let's Talk →

</button>

                </div>

            </div>

        </header>

    );

}