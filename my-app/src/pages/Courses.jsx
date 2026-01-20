// // // import { useEffect, useState } from "react";
// // // import CourseCard from "../components/CourseCard";

// // // export default function Courses() {
// // //   const [courses, setCourses] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const dummyCourses = [
// // //       {
// // //         id: 1,
// // //         title: "React for Beginners",
// // //         slug: "react-for-beginners",
// // //         category: "Web Development",
// // //         rating: 4.8,
// // //         price: 49,
// // //         image: "https://source.unsplash.com/400x300/?coding,react",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Complete Python Bootcamp",
// // //         slug: "complete-python-bootcamp",
// // //         category: "AI / ML",
// // //         rating: 4.7,
// // //         price: 39,
// // //         image: "https://source.unsplash.com/400x300/?python,coding",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "UI/UX Design Masterclass",
// // //         slug: "ui-ux-design",
// // //         category: "Graphic Design & UX/UI",
// // //         rating: 4.9,
// // //         price: 59,
// // //         image: "https://source.unsplash.com/400x300/?design,ui",
// // //       },
// // //       {
// // //         id: 4,
// // //         title: "Digital Marketing 2026",
// // //         slug: "digital-marketing",
// // //         category: "Digital Marketing",
// // //         rating: 4.6,
// // //         price: 29,
// // //         image: "https://source.unsplash.com/400x300/?marketing,digital",
// // //       },
// // //     ];

// // //     setTimeout(() => {
// // //       setCourses(dummyCourses);
// // //       setLoading(false);
// // //     }, 500);
// // //   }, []);

// // //   return (
// // //     <main className="pt-20 max-w-7xl mx-auto px-4">
// // //       <h1 className="text-2xl font-bold mb-6">All Courses</h1>
// // //       {loading ? (
// // //         <p>Loading courses...</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {courses.map((course) => (
// // //             <CourseCard key={course.id} course={course} />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </main>
// // //   );
// // // }

// // import { useState } from "react";
// // import { coursesData, categoriesData } from "../api/dummyData";
// // import CourseCard from "../components/CourseCard";

// // export default function Courses() {
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("all");

// //   const filteredCourses = coursesData.filter(course => {
// //     const matchCategory = category === "all" || course.category === category;
// //     const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
// //     return matchCategory && matchSearch;
// //   });

// //   return (
// //     <main className="pt-28 max-w-7xl mx-auto px-4">
// //       <h1 className="text-3xl font-bold mb-6">All Courses</h1>

// //       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
// //         <input
// //           type="text"
// //           placeholder="Search courses..."
// //           className="border px-3 py-2 rounded w-full sm:w-1/2"
// //           value={search}
// //           onChange={e => setSearch(e.target.value)}
// //         />
// //         <select
// //           className="border px-3 py-2 rounded w-full sm:w-1/4"
// //           value={category}
// //           onChange={e => setCategory(e.target.value)}
// //         >
// //           <option value="all">All Categories</option>
// //           {categoriesData.map(cat => (
// //             <option key={cat._id} value={cat.name}>{cat.name}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}
// //         {filteredCourses.length === 0 && <p>No courses found.</p>}
// //       </div>
// //     </main>
// //   );
// // }



// import { useState } from "react";
// import { coursesData, categoriesData } from "../api/dummyData";
// import CourseCard from "../components/CourseCard";
// import PageHero from "../components/PageHero.jsx";
// export default function Courses() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");

//   const filteredCourses = coursesData.filter(course => {
//     const matchCategory = category === "all" || course.category === category;
//     const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   return (
//     <main className="mt-20 max-w-7xl mx-auto">
//       <PageHero
//   title="Our Courses"
//   subtitle="Explore industry-relevant courses designed for success."
//   breadcrumb={["Home", "Courses"]}
// />

//       <h1 className="text-3xl font-bold mb-6">All Courses</h1>

//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <input
//           type="text"
//           placeholder="Search courses..."
//           className="border px-3 py-2 rounded w-full sm:w-1/2"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//         />
//         <select
//           className="border px-3 py-2 rounded w-full sm:w-1/4"
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//         >
//           <option value="all">All Categories</option>
//           {categoriesData.map(cat => (
//             <option key={cat._id} value={cat.name}>{cat.name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}
//         {filteredCourses.length === 0 && <p>No courses found.</p>}
//       </div>
      
//     </main>
//   );
// }

// // import { useContext, useMemo, useState } from "react";
// // import PageHero from "../components/PageHero.jsx";
// // import CourseControls from "../components/CourseControls.jsx";
// // import CourseGrid from "../components/CourseGrid.jsx";
// // import { CourseContext } from "../context/CourseContext.jsx";

// // export default function Courses() {
// //   const { courses, loading } = useContext(CourseContext);

// //   const [search, setSearch] = useState("");
// //   const [sort, setSort] = useState("latest");
// //   const [category, setCategory] = useState("");

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const COURSES_PER_PAGE = 12;

// //   const categories = useMemo(
// //     () => [...new Set(courses.map((c) => c.category))],
// //     [courses]
// //   );

// //   const filteredCourses = useMemo(() => {
// //     let data = [...courses];

// //     if (search)
// //       data = data.filter((c) =>
// //         c.title.toLowerCase().includes(search.toLowerCase())
// //       );

// //     if (category) data = data.filter((c) => c.category === category);

// //     switch (sort) {
// //       case "latest":
// //         data.reverse();
// //         break;
// //       case "oldest":
// //         data.sort((a, b) => a.id - b.id);
// //         break;
// //       case "az":
// //         data.sort((a, b) => a.title.localeCompare(b.title));
// //         break;
// //       case "za":
// //         data.sort((a, b) => b.title.localeCompare(a.title));
// //         break;
// //       default:
// //         break;
// //     }

// //     return data;
// //   }, [courses, search, category, sort]);

// //   const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
// //   const paginatedCourses = filteredCourses.slice(
// //     (currentPage - 1) * COURSES_PER_PAGE,
// //     currentPage * COURSES_PER_PAGE
// //   );

// //   const handlePageChange = (page) => {
// //     if (page < 1 || page > totalPages) return;
// //     setCurrentPage(page);
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       <PageHero
// //         title="Our Courses"
// //         subtitle="Explore all courses and build new skills"
// //         breadcrumb={["Home", "Courses"]}
// //       />

// //       <main className="max-w-7xl mx-auto px-4 py-20">
// //         <CourseControls
// //           search={search}
// //           setSearch={setSearch}
// //           sort={sort}
// //           setSort={setSort}
// //           category={category}
// //           setCategory={setCategory}
// //           categories={categories}
// //         />

// //         <CourseGrid courses={paginatedCourses} loading={loading} />

// //         {/* Pagination */}
// //         {totalPages > 1 && (
// //           <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">
// //             <button
// //               onClick={() => handlePageChange(currentPage - 1)}
// //               disabled={currentPage === 1}
// //               className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
// //             >
// //               Prev
// //             </button>

// //             {Array.from({ length: totalPages }, (_, i) => i + 1).map(
// //               (page) => (
// //                 <button
// //                   key={page}
// //                   onClick={() => handlePageChange(page)}
// //                   className={`px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white ${
// //                     currentPage === page
// //                       ? "bg-blue-600 text-white"
// //                       : "bg-gray-200 text-gray-700"
// //                   }`}
// //                 >
// //                   {page}
// //                 </button>
// //               )
// //             )}

// //             <button
// //               onClick={() => handlePageChange(currentPage + 1)}
// //               disabled={currentPage === totalPages}
// //               className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
// //             >
// //               Next
// //             </button>
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }
// import { useContext, useMemo, useState } from "react";
// import { CourseContext } from "../context/CourseContext";

// import CourseHeader from "../components/CourseHeader";
// import CourseGrid from "../components/CourseGrid";
// import CourseFilters from "../components/CourseFilters";
// import MobileFilterDrawer from "../components/MobileFilterDrawer";

// export default function Courses() {
//   const { courses, loading } = useContext(CourseContext);

//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("relevant");

//   const [categories, setCategories] = useState([]);
//   const [prices, setPrices] = useState([]);

//   const [mobileFilter, setMobileFilter] = useState(false);

//   const filteredCourses = useMemo(() => {
//     let data = [...courses];

//     // 🔍 Search
//     if (search) {
//       data = data.filter(c =>
//         c.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // 📂 Category filter
//     if (categories.length > 0) {
//       data = data.filter(c =>
//         categories.includes(c.category)
//       );
//     }

//     // 💰 Price filter
//     if (prices.length > 0) {
//       data = data.filter(c =>
//         prices.includes(c.price === 0 ? "Free" : "Paid")
//       );
//     }

//     // ↕ Sorting
//     if (sort === "az") data.sort((a, b) => a.title.localeCompare(b.title));
//     if (sort === "za") data.sort((a, b) => b.title.localeCompare(a.title));
//     if (sort === "rating") data.sort((a, b) => b.rating - a.rating);
//     if (sort === "price") data.sort((a, b) => a.price - b.price);

//     return data;
//   }, [courses, search, sort, categories, prices]);

//   return (
//     <div className="bg-[#FFF3E8] min-h-screen py-16">
//       <div className="max-w-7xl mx-auto px-4 flex gap-8">

//         {/* Desktop filters */}
//         <div className="hidden lg:block">
//           <CourseFilters
//             categories={categories}
//             setCategories={setCategories}
//             prices={prices}
//             setPrices={setPrices}
//           />
//         </div>

//         {/* Mobile filter */}
//         <button
//           onClick={() => setMobileFilter(true)}
//           className="lg:hidden fixed bottom-6 right-6 z-30 bg-black text-white px-4 py-3 rounded-full"
//         >
//           Filters
//         </button>

//         <MobileFilterDrawer
//           open={mobileFilter}
//           onClose={() => setMobileFilter(false)}
//           categories={categories}
//           setCategories={setCategories}
//           prices={prices}
//           setPrices={setPrices}
//         />

//         <div className="flex-1">
//           <CourseHeader
//             search={search}
//             setSearch={setSearch}
//             sort={sort}
//             setSort={setSort}
//           />

//           <CourseGrid courses={filteredCourses} loading={loading} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useMemo, useState } from "react";
// import { courses } from "../api/courses";
// import CourseCard from "../components/CourseCard";
// import Filters from "../components/CourseFilters.jsx";

// export default function Courses() {
//   const [filters, setFilters] = useState({ level: [], price: [] });
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("relevant");

//   const filteredCourses = useMemo(() => {
//     let result = courses.filter((c) => {
//       const matchLevel =
//         filters.level.length === 0 || filters.level.includes(c.level);

//       const matchPrice =
//         filters.price.length === 0 ||
//         (filters.price.includes("Free") && c.price === 0) ||
//         (filters.price.includes("Paid") && c.price > 0);

//       const matchSearch =
//         c.title.toLowerCase().includes(search.toLowerCase());

//       return matchLevel && matchPrice && matchSearch;
//     });

//     if (sort === "newest") {
//       result.sort(
//         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       );
//     }
//     if (sort === "duration") {
//       result.sort((a, b) => a.duration - b.duration);
//     }
//     if (sort === "popular") {
//       result.sort((a, b) => b.popularity - a.popularity);
//     }

//     return result;
//   }, [filters, search, sort]);

//   return (
//     <div className="min-h-screen pt-16">
//       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-10">

//         {/* Sidebar */}
//         <aside className="hidden lg:block sticky top-24 h-fit">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold">Filters</h2>
//             <span className="text-sm text-gray-500">
//               {filteredCourses.length} results
//             </span>
//           </div>

//           <Filters filters={filters} setFilters={setFilters} />
//         </aside>

//         {/* Main Content */}
//         <main className="lg:col-span-3 space-y-8">

//           {/* Search + Sort */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Search courses"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="
//                 flex-1 px-4 py-3 rounded-lg border border-gray-300
//                 focus:outline-none focus:ring-2 focus:ring-indigo-500
//               "
//             />

//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="
//                 px-4 py-3 rounded-lg border border-gray-300
//                 focus:outline-none focus:ring-2 focus:ring-indigo-500
//               "
//             >
//               <option value="relevant">Most relevant</option>
//               <option value="newest">Newest</option>
//               <option value="duration">Duration</option>
//               <option value="popular">Popularity</option>
//             </select>
//           </div>

//           {/* Courses Grid */}
//           <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }


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
