function FooterBrand({ footer }) {

    const technologies =

    footer?.technologies || [];

    return (

        <div className="footer-brand">

            <span className="footer-brand-badge">

                👋 Thanks for Visiting

            </span>

            <h2 className="footer-brand-title">

                Let's Build Something Amazing Together

            </h2>

            <p className="footer-brand-text">

                {footer.tagLine}

            </p>

            <div className="footer-tech-list">

                {

                    technologies.map((tech) => (

                        <span
                            key={tech}
                            className="footer-tech-item"
                        >

                            {tech}

                        </span>

                    ))

                }

            </div>

            <p className="footer-brand-note">

                Crafted with passion, clean code, and
                modern web technologies.

            </p>

        </div>

    );

}

export default FooterBrand;