import { useEffect, useState } from "react";

import CertificatesCard from "./CertificatesCard";

import { getCertificatesData } from "../../../services/certificateService";

export default function CertificatesGrid() {

    const [certificates, setCertificates] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadCertificates();

    }, []);

    async function loadCertificates() {

        try {

            const data = await getCertificatesData()

            setCertificates(data);

        }

        catch (error) {

            console.error(
                "Failed to load certificates:",
                error
            );

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="certificate-empty">

                <h3>Loading Certificates...</h3>

                <p>
                    Please wait while we load your certifications.
                </p>

            </div>

        );

    }

    if (certificates.length === 0) {

        return (

            <div className="certificate-empty">

                <h3>No Certificates Found</h3>

                <p>
                    Add your certificates from the CMS to
                    display them here.
                </p>

            </div>

        );

    }

    return (

        <div
            id="certificate-grid"
            className="certificate-grid"
        >

            {

                certificates

                    .sort(

                        (a, b) =>

                            (a.order || 0) -

                            (b.order || 0)

                    )

                    .map((certificate) => (

                        <CertificatesCard

                            key={certificate.id}

                            certificate={certificate}

                        />

                    ))

            }

        </div>

    );

}