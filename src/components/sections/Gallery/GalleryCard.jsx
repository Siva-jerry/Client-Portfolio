import { useEffect, useState } from "react";

import {
    FiImage,
    FiZoomIn,
    FiStar,
    FiX,
} from "react-icons/fi";

import { getSupabaseImageUrl } from "../../../supabase/supabase";

export default function GalleryCard({ image }) {

    const [isOpen, setIsOpen] = useState(false);

    const imageUrl = image.image
        ? getSupabaseImageUrl(image.image)
        : "";

    useEffect(() => {

        function handleEscape(event) {

            if (event.key === "Escape") {

                setIsOpen(false);

            }

        }

        window.addEventListener("keydown", handleEscape);

        return () => {

            window.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, []);

    return (

        <>

            <article
                className="gallery-card"
            >

                {

                    image.featured === true ||

                    image.featured === "true"

                        ? (

                            <span
                                className="gallery-featured"
                            >

                                <FiStar />

                                Featured

                            </span>

                        )

                        : null

                }

                <div
                    className="gallery-image-wrapper"
                    onClick={() => setIsOpen(true)}
                >

                    <img

                        src={imageUrl}

                        alt={image.title}

                        className="gallery-image"

                        loading="lazy"

                    />

                    <div
                        className="gallery-overlay"
                    >

                        <span
                            className="gallery-category"
                        >

                            {image.category}

                        </span>

                        <div
                            className="gallery-overlay-content"
                        >

                            <h3>

                                {image.title}

                            </h3>

                            <button

                                type="button"

                                className="gallery-view-button"

                                onClick={(event) => {

                                    event.stopPropagation();

                                    setIsOpen(true);

                                }}

                            >

                                <FiZoomIn />

                                View Image

                            </button>

                        </div>

                    </div>

                </div>

                <div
                    className="gallery-card-footer"
                >

                    <div
                        className="gallery-footer-icon"
                    >

                        <FiImage />

                    </div>

                    <div>

                        <h4
                            className="gallery-footer-title"
                        >

                            {image.title}

                        </h4>

                        <p
                            className="gallery-footer-category"
                        >

                            {image.category}

                        </p>

                    </div>

                </div>

            </article>

            {

                isOpen && (

                    <div

                        className="gallery-lightbox"

                        onClick={() => setIsOpen(false)}

                    >

                        <button

                            type="button"

                            className="gallery-lightbox-close"

                            onClick={() => setIsOpen(false)}

                        >

                            <FiX />

                        </button>

                        <img

                            src={imageUrl}

                            alt={image.title}

                            className="gallery-lightbox-image"

                            onClick={(event) =>

                                event.stopPropagation()

                            }

                        />

                        <div
                            className="gallery-lightbox-info"
                        >

                            <h3>

                                {image.title}

                            </h3>

                            <p>

                                {image.category}

                            </p>

                        </div>

                    </div>

                )

            }

        </>

    );

}