export default function GalleryFilter({

    categories,

    selectedCategory,

    setSelectedCategory,

}) {

    return (

        <div
            id="gallery-filter-wrapper"
            className="gallery-filter-wrapper"
        >

            <div
                id="gallery-filter-container"
                className="gallery-filter-container"
            >

                {

                    categories.map((category) => (

                        <button

                            key={category}

                            id={`gallery-filter-${category}`}

                            type="button"

                            className={

                                selectedCategory === category

                                    ? "gallery-filter-button active"

                                    : "gallery-filter-button"

                            }

                            onClick={() =>

                                setSelectedCategory(category)

                            }

                        >

                            {category}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}