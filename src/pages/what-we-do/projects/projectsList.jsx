import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData";

const projectsList = () => {
  // Subcategory checkbox selections
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [sortOrder, setSortOrder] = useState("Default");

  // Accordion open states
  const [isCommunityOpen, setIsCommunityOpen] = useState(true);
  const [isAgricultureOpen, setIsAgricultureOpen] = useState(true);
  const [isStatusOpen, setIsStatusOpen] = useState(true);
  const [isSortOpen, setIsSortOpen] = useState(true);

  const categoryStructure = {
    "Community Programs": [
      "Local Businesses",
      "Fashion & Wearables",
      "Other Projects",
    ],
    "Agriculture & Food": [
      "Land",
      "Dairy & Poultry business",
      "Food market",
      "Other farming projects",
    ],
  };

  const statuses = ["Upcoming", "Fully Funded", "Completed"];
  const sortOptions = [
    "Default",
    "A-Z",
    "Z-A",
    "Newest",
    "Oldest",
    "Recently added updates",
  ];

  // Toggle subcategory
  const toggleSubcategory = (sub) => {
    setSelectedSubcategories((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub],
    );
  };

  // Toggle status
  const toggleStatus = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

  // Filtered & sorted projects
  const filteredProjects = useMemo(() => {
    let results = [...projectsData];

    if (selectedSubcategories.length > 0) {
      results = results.filter((p) =>
        selectedSubcategories.includes(p.subcategory),
      );
    }
    if (selectedStatuses.length > 0) {
      results = results.filter((p) => selectedStatuses.includes(p.status));
    }

    switch (sortOrder) {
      case "A-Z":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Newest":
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "Oldest":
        results.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "Recently added updates":
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    return results;
  }, [selectedSubcategories, selectedStatuses, sortOrder]);

  // Checkbox component
  const Checkbox = ({ checked }) => (
    <div
      className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${checked ? "bg-brand-lilac border-brand-lilac" : "border-brand-dark-200 bg-white"}`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );

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
            Projects{" "}
            <span className="text-xl md:text-2xl font-normal text-brand-dark-300">
              ({filteredProjects.length} results)
            </span>
          </h1>
        </div>

        {/* Main Layout: Cards + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-[280px] shrink-0 order-first lg:order-last space-y-8">
            {/* ─── Category ─── */}
            <div>
              <div className="flex items-center gap-2 mb-4">
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
                <span className="text-base font-semibold font-primary text-brand-dark">
                  Category
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Community Programs */}
                <div>
                  <button
                    onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                    className="w-full flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <span className="text-sm font-semibold font-secondary text-brand-lilac">
                      Community Programs
                    </span>
                    <ChevronIcon isOpen={isCommunityOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isCommunityOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {categoryStructure["Community Programs"].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => toggleSubcategory(sub)}
                        className="w-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <Checkbox
                          checked={selectedSubcategories.includes(sub)}
                        />
                        <span className="text-sm font-secondary text-brand-dark-400">
                          {sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agriculture & Food */}
                <div>
                  <button
                    onClick={() => setIsAgricultureOpen(!isAgricultureOpen)}
                    className="w-full flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <span className="text-sm font-semibold font-secondary text-brand-lilac">
                      Agriculture & Food
                    </span>
                    <ChevronIcon isOpen={isAgricultureOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isAgricultureOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {categoryStructure["Agriculture & Food"].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => toggleSubcategory(sub)}
                        className="w-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <Checkbox
                          checked={selectedSubcategories.includes(sub)}
                        />
                        <span className="text-sm font-secondary text-brand-dark-400">
                          {sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Filters ─── */}
            <div>
              <div className="flex items-center gap-2 mb-4">
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
                <span className="text-base font-semibold font-primary text-brand-dark">
                  Filters
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Project Status */}
                <div>
                  <button
                    onClick={() => setIsStatusOpen(!isStatusOpen)}
                    className="w-full flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <span className="text-sm font-semibold font-secondary text-brand-lilac">
                      Project status
                    </span>
                    <ChevronIcon isOpen={isStatusOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isStatusOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => toggleStatus(status)}
                        className="w-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <Checkbox checked={selectedStatuses.includes(status)} />
                        <span className="text-sm font-secondary text-brand-dark-400">
                          {status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="w-full flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <span className="text-sm font-semibold font-secondary text-brand-lilac">
                      Sort
                    </span>
                    <ChevronIcon isOpen={isSortOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isSortOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortOrder(option)}
                        className="w-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <Checkbox checked={sortOrder === option} />
                        <span className="text-sm font-secondary text-brand-dark-400">
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  to={`/projects/list/${project.id}`}
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
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
                </Link>
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
        </div>
      </div>
    </section>
  );
};

export default projectsList;
