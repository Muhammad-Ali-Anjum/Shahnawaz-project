// import React, { useContext } from "react";
// import PageHero from "../components/PageHero.jsx";
// import BlogSkeleton from "../components/BlogSkeleton.jsx";
// import BlogCard from "../components/BlogCard.jsx";
// import { BlogContext } from "../context/BlogContext";

// function Home() {
//   const { blogs, loading } = useContext(BlogContext);

//   // Latest 8 blogs
//   const latestBlogs = blogs.slice(-8).reverse();

//   return (
//     <>
//       <div className="mt-20">
//         <PageHero
//         title="Learn Without Limits"
//         subtitle="Build skills for the future with expert-led courses."
//         breadcrumb={["Home"]}
//       />

//       <section className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           From Our Blog
//         </h2>

//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <BlogSkeleton key={i} />
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {latestBlogs.map((blog) => (
//               <BlogCard key={blog.id} blog={blog} />
//             ))}
//           </div>
//         )}
//       </section>
//       </div>
//     </>
//   );
// }

// export default Home;


import React, { useContext, useMemo } from "react";
import PageHero from "../components/PageHero.jsx";
import BlogSkeleton from "../components/BlogSkeleton.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { BlogContext } from "../context/BlogContext";

import { courses } from "../api/courses";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

function Home() {
  const { blogs, loading } = useContext(BlogContext);

  const latestBlogs = blogs.slice(-8).reverse();

  const recentCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 8);
  }, []);

  const popularCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 8);
  }, []);

  return (
    <>
      <div className="mt-20">
        <PageHero
          title="Learn Without Limits"
          subtitle="Build skills for the future with expert-led courses."
          breadcrumb={["Home"]}
        />

        {/* ================= RECENT COURSES ================= */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  New & Trending
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Recent courses
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl">
                  Start learning with our latest professional and industry-ready
                  courses.
                </p>
              </div>

              <Link
                to="/courses"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                View all courses →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentCourses.map((course) => (
                <div
                  key={course.id}
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= POPULAR COURSES ================= */}
        <section className="relative py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Most enrolled
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Popular courses
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl">
                  Learner-favourite courses chosen by thousands of students.
                </p>
              </div>

              <Link
                to="/courses?sort=popular"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                Explore popular →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course) => (
                <div
                  key={course.id}
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-medium text-indigo-600 mb-2">
                Resources & insights
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                From our blog
              </h2>
              <p className="text-gray-600 mt-3">
                Practical guides, career tips and technology insights from our
                instructors.
              </p>
            </div>

            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <BlogSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {latestBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
