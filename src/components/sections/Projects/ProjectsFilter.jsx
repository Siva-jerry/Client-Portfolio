export default function ProjectsFilter({

    categories,

    selectedCategory,

    setSelectedCategory,

}) {

    return (

        <div
            id="projects-filter-wrapper"
            className="projects-filter-wrapper"
        >

            <div
                id="projects-filter-container"
                className="projects-filter-container"
            >

                {

                    categories.map((category) => (

                        <button

                            key={category}

                            id={`projects-filter-${category}`}

                            className={

                                selectedCategory === category

                                    ? "projects-filter-button active"

                                    : "projects-filter-button"

                            }

                            onClick={() =>

                                setSelectedCategory(category)

                            }

                            type="button"

                        >

                            {category}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}