import { useEffect, useState } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";

import CertificatesCard from "./CertificatesCard";
import { getCertificatesData } from "../../../services/certificateService";

export default function CertificatesGrid() {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        loadCertificates();
    }, []);

    // Close modal when pressing Escape key & disable page scrolling when modal is open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedCert(null);
        };

        if (selectedCert) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedCert]);

    async function loadCertificates() {
        try {
            const data = await getCertificatesData();
            setCertificates(data);
        } catch (error) {
            console.error("Failed to load certificates:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="certificate-empty">
                <h3>Loading Certificates...</h3>
                <p>Please wait while we load your certifications.</p>
            </div>
        );
    }

    if (certificates.length === 0) {
        return (
            <div className="certificate-empty">
                <h3>No Certificates Found</h3>
                <p>Add your certificates from the CMS to display them here.</p>
            </div>
        );
    }

    return (
        <>
            <div id="certificate-grid" className="certificate-grid">
                {certificates
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((certificate) => (
                        <CertificatesCard
                            key={certificate.id}
                            certificate={certificate}
                            onSelect={setSelectedCert}
                        />
                    ))}
            </div>

            {/* LIGHTBOX POPUP MODAL */}
            {selectedCert && (
                <div
                    className="certificate-modal-overlay"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="certificate-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="certificate-modal-close"
                            onClick={() => setSelectedCert(null)}
                            aria-label="Close modal"
                        >
                            <FiX />
                        </button>

                        <img
                            src={selectedCert.imageUrl}
                            alt={selectedCert.title}
                            className="certificate-modal-image"
                        />

                        <div className="certificate-modal-info">
                            <h3>{selectedCert.title}</h3>
                            <p>{selectedCert.organization}</p>
                            {selectedCert.verifyLink && (
                                <a
                                    href={selectedCert.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certificate-button"
                                >
                                    Verify Certificate <FiExternalLink />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}