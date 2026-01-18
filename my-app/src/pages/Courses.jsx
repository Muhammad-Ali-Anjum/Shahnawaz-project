// import { useEffect, useState } from "react";
// import CourseCard from "../components/CourseCard";

// export default function Courses() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const dummyCourses = [
//       {
//         id: 1,
//         title: "React for Beginners",
//         slug: "react-for-beginners",
//         category: "Web Development",
//         rating: 4.8,
//         price: 49,
//         image: "https://source.unsplash.com/400x300/?coding,react",
//       },
//       {
//         id: 2,
//         title: "Complete Python Bootcamp",
//         slug: "complete-python-bootcamp",
//         category: "AI / ML",
//         rating: 4.7,
//         price: 39,
//         image: "https://source.unsplash.com/400x300/?python,coding",
//       },
//       {
//         id: 3,
//         title: "UI/UX Design Masterclass",
//         slug: "ui-ux-design",
//         category: "Graphic Design & UX/UI",
//         rating: 4.9,
//         price: 59,
//         image: "https://source.unsplash.com/400x300/?design,ui",
//       },
//       {
//         id: 4,
//         title: "Digital Marketing 2026",
//         slug: "digital-marketing",
//         category: "Digital Marketing",
//         rating: 4.6,
//         price: 29,
//         image: "https://source.unsplash.com/400x300/?marketing,digital",
//       },
//     ];

//     setTimeout(() => {
//       setCourses(dummyCourses);
//       setLoading(false);
//     }, 500);
//   }, []);

//   return (
//     <main className="pt-20 max-w-7xl mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-6">All Courses</h1>
//       {loading ? (
//         <p>Loading courses...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

import { useState } from "react";
import { coursesData, categoriesData } from "../api/dummyData";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredCourses = coursesData.filter(course => {
    const matchCategory = category === "all" || course.category === category;
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="pt-28 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="border px-3 py-2 rounded w-full sm:w-1/2"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border px-3 py-2 rounded w-full sm:w-1/4"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categoriesData.map(cat => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}
        {filteredCourses.length === 0 && <p>No courses found.</p>}
      </div>
    </main>
  );
}
