import GalleryCard from "./GalleryCard";

export default function GalleryGrid({

    images = [],

}) {

    if (images.length === 0) {

        return (

            <div className="gallery-empty">

                <h3>

                    No Gallery Images Found

                </h3>

                <p>

                    Add gallery images from your Admin Panel to
                    showcase your work here.

                </p>

            </div>

        );

    }

    return (

        <div

            id="gallery-grid"

            className="gallery-grid"

        >

            {

                images.map((image, index) => (

                    <GalleryCard

                        key={image.id || index}

                        image={image}

                    />

                ))

            }

        </div>

    );

}