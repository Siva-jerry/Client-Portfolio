import {
    FiAward,
    FiCalendar,
    FiExternalLink,
    FiHash,
} from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function CertificatesCard({ certificate }) {

    const imageUrl = certificate.image
        ? getSupabaseImageUrl(certificate.image)
        : "";

    return (

        <article
            className="certificate-card"
        >

            {

                certificate.featured && (

                    <span
                        className="certificate-featured"
                    >

                        <FiAward />

                        Featured

                    </span>

                )

            }

            <div
                className="certificate-image-wrapper"
            >

                <img

                    src={imageUrl}

                    alt={certificate.title}

                    className="certificate-image"

                />

            </div>

            <div
                className="certificate-content"
            >

                <h3
                    className="certificate-card-title"
                >

                    {certificate.title}

                </h3>

                <p
                    className="certificate-organization"
                >

                    {certificate.organization}

                </p>

                <div
                    className="certificate-meta"
                >

                    <div
                        className="certificate-meta-item"
                    >

                        <FiCalendar />

                        <span>

                            {certificate.issueDate}

                        </span>

                    </div>

                    <div
                        className="certificate-meta-item"
                    >

                        <FiHash />

                        <span>

                            {certificate.credentialId}

                        </span>

                    </div>

                </div>

                {

                    certificate.verifyLink && (

                        <a

                            href={certificate.verifyLink}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="certificate-button"

                        >

                            Verify Certificate

                            <FiExternalLink />

                        </a>

                    )

                }

            </div>

        </article>

    );

}