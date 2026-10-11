import { useState, useEffect } from "react";
import placeholderImage from "../../../assets/images/hero/profile.png";
import { HiSparkles } from "react-icons/hi2";
import { usePortfolio } from "../../../context/PortfolioContext";
import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function HeroImage() {
    const { hero } = usePortfolio();

    const [isActualLoaded, setIsActualLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const rawUrl = hero?.imageUrl || hero?.imagePath;
    const actualImageUrl = rawUrl && rawUrl.trim() !== ""
        ? getSupabaseImageUrl(rawUrl)
        : null;

    useEffect(() => {
        if (!actualImageUrl) {
            setIsActualLoaded(false);
            setHasError(false);
            return;
        }

        let isMounted = true;
        const img = new Image();
        img.src = actualImageUrl;

        if (img.complete && img.naturalWidth > 0) {
            setIsActualLoaded(true);
            setHasError(false);
        } else {
            setIsActualLoaded(false);
            setHasError(false);
            img.onload = () => {
                if (isMounted) {
                    setIsActualLoaded(true);
                    setHasError(false);
                }
            };
            img.onerror = () => {
                if (isMounted) {
                    setHasError(true);
                    setIsActualLoaded(false);
                }
            };
        }

        return () => {
            isMounted = false;
            img.onload = null;
            img.onerror = null;
        };
    }, [actualImageUrl]);

    return (
        <div className="hero-image-shell">
            {/* Aurora */}
            <div className="hero-image-orb"></div>

            {/* Circle Ring */}
            <div className="hero-image-ring"></div>

            {/* Decorative Circle */}
            <div className="hero-image-ring hero-image-ring-two"></div>

            {/* Floating Spark */}
            <div className="hero-floating-star hero-star-one">
                <HiSparkles />
            </div>

            <div className="hero-floating-star hero-star-two">
                <HiSparkles />
            </div>

            <div className="hero-floating-star hero-star-three">
                <HiSparkles />
            </div>

            {/* Glass Image */}
            <div className="hero-image-frame">
                <div className="hero-image-inner">
                    {/* Placeholder image: instantly visible on load / slow connection / before firestore arrives */}
                    <img
                        src={placeholderImage}
                        alt="Hero Profile"
                        className="hero-image-photo hero-image-photo-placeholder"
                    />

                    {/* Actual uploaded image: overlays seamlessly once downloaded */}
                    {actualImageUrl && !hasError && (
                        <img
                            src={actualImageUrl}
                            alt="Hero Profile"
                            className={`hero-image-photo hero-image-photo-actual ${isActualLoaded ? "loaded" : ""}`}
                            onLoad={() => setIsActualLoaded(true)}
                            onError={() => {
                                setHasError(true);
                                setIsActualLoaded(false);
                            }}
                        />
                    )}

                    <div className="hero-image-shine"></div>
                </div>
            </div>
        </div>
    );
}