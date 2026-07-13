import "./Certificates.css";

import CertificatesHeading from "./CertificatesHeading";
import CertificatesGrid from "./CertificatesGrid";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="certificate-section"
    >
      <div className="certificate-container">

        {/* =========================
            Section Heading
        ========================== */}
        <CertificatesHeading />

        {/* =========================
            Certificates Grid
        ========================== */}
        <CertificatesGrid />

      </div>
    </section>
  );
}