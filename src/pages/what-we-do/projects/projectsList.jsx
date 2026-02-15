import React, { useState, useMemo } from "react";
import projectsData from "./projectsData";

const projectsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("Default");

  // Accordion open states
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ["All", "Community Programs", "Agriculture & Food"];
  const statuses = ["All", "Active", "Completed"];
  const sortOptions = ["Default", "A-Z", "Z-A"];

  // Filtered & sorted projects
  const filteredProjects = useMemo(() => {
    let results = [...projectsData];

    if (selectedCategory !== "All") {
      results = results.filter((p) => p.category === selectedCategory);
    }
    if (selectedStatus !== "All") {
      results = results.filter((p) => p.status === selectedStatus);
    }
    if (sortOrder === "A-Z") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "Z-A") {
      results.sort((a, b) => b.title.localeCompare(a.title));
    }

    return results;
  }, [selectedCategory, selectedStatus, sortOrder]);

  // Chevron icon component
  const ChevronIcon = ({ isOpen }) => (
    <svg
      className={`w-5 h-5 text-brand-dark-300 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <section className="bg-brand-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-primary text-brand-dark">
            Programs{" "}
            <span className="text-xl md:text-2xl font-normal text-brand-dark-300">
              ({filteredProjects.length} results)
            </span>
          </h1>
        </div>

        {/* Main Layout: Cards + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Project Cards Grid */}
          <div className="grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="w-full h-[160px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col grow">
                    <h3 className="text-base font-bold font-primary text-brand-dark mb-1.5 truncate">
                      {project.title}
                    </h3>
                    <p className="text-sm font-secondary text-brand-dark-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-auto flex items-center gap-3">
                      <span className="text-lg font-bold font-primary text-brand-lilac">
                        {project.capitalRaised}
                      </span>
                      <span className="text-xs font-secondary text-brand-dark-300">
                        Capital raised
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg font-secondary text-brand-dark-300">
                  No projects match the selected filters.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Filters */}
          <div className="w-full lg:w-[240px] shrink-0 order-first lg:order-last">
            {/* Category */}
            <div className="mb-6">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center gap-2 mb-3 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-brand-lilac"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-semibold font-primary text-brand-dark">
                  Category
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${isCategoryOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="flex flex-col gap-2">
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category ? "All" : category,
                          )
                        }
                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-secondary cursor-pointer transition-colors ${selectedCategory === category ? "bg-brand-lilac-100 text-brand-lilac-700" : "bg-white text-brand-dark-400 hover:bg-gray-50"}`}
                      >
                        {category}
                        <ChevronIcon isOpen={selectedCategory === category} />
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Filters */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-brand-lilac"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
                <span className="text-sm font-semibold font-primary text-brand-dark">
                  Filters
                </span>
              </div>

              {/* Project Status */}
              <div className="mb-2">
                <button
                  onClick={() => setIsStatusOpen(!isStatusOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white text-sm font-secondary text-brand-dark-400 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  Project status
                  <ChevronIcon isOpen={isStatusOpen} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isStatusOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-1 pl-2">
                    {statuses
                      .filter((s) => s !== "All")
                      .map((status) => (
                        <button
                          key={status}
                          onClick={() =>
                            setSelectedStatus(
                              selectedStatus === status ? "All" : status,
                            )
                          }
                          className={`text-left px-3 py-2 rounded-md text-sm font-secondary cursor-pointer transition-colors ${selectedStatus === status ? "text-brand-lilac-700 bg-brand-lilac-100" : "text-brand-dark-400 hover:bg-gray-50"}`}
                        >
                          {status}
                        </button>
                      ))}
                  </div>
                </div>
              </div>

              {/* Sort */}
              <div>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white text-sm font-secondary text-brand-dark-400 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  Sort
                  <ChevronIcon isOpen={isSortOpen} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isSortOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-1 pl-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortOrder(option)}
                        className={`text-left px-3 py-2 rounded-md text-sm font-secondary cursor-pointer transition-colors ${sortOrder === option ? "text-brand-lilac-700 bg-brand-lilac-100" : "text-brand-dark-400 hover:bg-gray-50"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projectsList;
