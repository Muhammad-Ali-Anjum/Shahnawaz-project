
import { useMemo, useState } from "react";
import { courses } from "../api/courses";
import CourseCard from "../components/CourseCard";
import Filters from "../components/CourseFilters.jsx"; // make sure path is correct
import { categoriesData } from "../api/dummyData"; 
import PageHero from "../components/PageHero";

export default function Courses() {
  const [filters, setFilters] = useState({
    level: [],
    price: [],
    category: [], // Added category
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevant");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((c) => {
      const matchLevel =
        filters.level.length === 0 || filters.level.includes(c.level);

      const matchPrice =
        filters.price.length === 0 ||
        (filters.price.includes("Free") && c.price === 0) ||
        (filters.price.includes("Paid") && c.price > 0);

      const matchCategory =
        filters.category.length === 0 || filters.category.includes(c.categorySlug);

      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());

      return matchLevel && matchPrice && matchCategory && matchSearch;
    });

    if (sort === "newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    if (sort === "duration") {
      result.sort((a, b) => a.duration - b.duration);
    }
    if (sort === "popular") {
      result.sort((a, b) => b.popularity - a.popularity);
    }

    return result;
  }, [filters, search, sort]);

  return (
    <div className="min-h-screen pt-16">
      <PageHero
  title="Our Courses"
  subtitle="Explore industry-relevant courses designed for success."
  breadcrumb={["Home", "Courses"]}
/>
      <div className="max-w-7xl mt-11 mx-auto px-4 grid lg:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-24 h-fit">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Filters</h2>
            <span className="text-sm text-gray-500">
              {filteredCourses.length} results
            </span>
          </div>

          <Filters filters={filters} setFilters={setFilters} categories={categoriesData} />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search courses"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                flex-1 px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
            >
              <option value="relevant">Most relevant</option>
              <option value="newest">Newest</option>
              <option value="duration">Duration</option>
              <option value="popular">Popularity</option>
            </select>
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">
                No courses found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
