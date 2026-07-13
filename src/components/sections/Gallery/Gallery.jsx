import "./Gallery.css";

import { useMemo, useState } from "react";

import { usePortfolio } from "../../../context/PortfolioContext";

import GalleryHeading from "./GalleryHeading";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {

    const { gallery } = usePortfolio();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = useMemo(() => {

        if (!gallery || gallery.length === 0) {

            return ["All"];

        }

        return [

            "All",

            ...new Set(

                gallery.map((item) => item.category)

            ),

        ];

    }, [gallery]);

    const filteredGallery = useMemo(() => {

        if (selectedCategory === "All") {

            return gallery;

        }

        return gallery.filter(

            (item) => item.category === selectedCategory

        );

    }, [gallery, selectedCategory]);

    return (

        <section
            id="gallery"
            className="gallery-section"
        >

            <div className="gallery-container">

                <GalleryHeading />

                <GalleryFilter

                    categories={categories}

                    selectedCategory={selectedCategory}

                    setSelectedCategory={setSelectedCategory}

                />

                <GalleryGrid

                    images={filteredGallery}

                />

            </div>

        </section>

    );

}