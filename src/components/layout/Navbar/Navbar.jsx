import { useState, useEffect } from "react";
import "./Navbar.css";
import { navLinks } from "../../../data/navigation";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside or resizing to desktop
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 992) {
                setIsOpen(false);
            }
        }
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleContactClick = () => {
        setIsOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <>
            <header className="navbar">
                <div className="container navbar-container">
                    <a
                        href="#home"
                        className="navbar-logo"
                        onClick={(e) => handleNavClick(e, "#home")}
                    >
                        <span>Nimalda</span>
                    </a>

                    <nav className="navbar-menu">
                        {navLinks.map((link)=>(
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    <div className="navbar-actions">
                        <button
                            className="hire-btn desktop-hire-btn"
                            onClick={handleContactClick}
                        >
                            Let's Talk →
                        </button>

                        <button
                            type="button"
                            className={`navbar-toggle ${isOpen ? "open" : ""}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Dropdown */}
                <div className={`navbar-mobile-drawer ${isOpen ? "open" : ""}`}>
                    <nav className="mobile-nav-links">
                        {navLinks.map((link)=>(
                            <a
                                key={link.id}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                <span>{link.title}</span>
                                <span className="mobile-nav-arrow">→</span>
                            </a>
                        ))}
                    </nav>

                    <button
                        className="hire-btn mobile-hire-btn"
                        onClick={handleContactClick}
                    >
                        Let's Talk →
                    </button>
                </div>
            </header>

            {/* Backdrop for closing mobile menu */}
            {isOpen && (
                <div
                    className="navbar-backdrop"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}