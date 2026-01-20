// // import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";

// // const createSlug = (title) =>
// //   title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// // export default function CourseCard({ course }) {
// //   return (
// //     <Link to={`/courses/${createSlug(course.title)}`}>
// //       <motion.div
// //         whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
// //         whileTap={{ scale: 0.97 }}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border border-transparent w-full relative"
// //       >
// //         <img
// //           src={course.thumbnail || `https://picsum.photos/600/400?random=${course.id}`}
// //           alt={course.title}
// //           className="h-48 md:h-56 w-full object-cover"
// //         />
// //         <div className="p-4 md:p-6">
// //           <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
// //             {course.title}
// //           </h3>
// //           <p className="text-gray-600 text-sm line-clamp-3 mb-4">
// //             {course.description}
// //           </p>
// //           <span className="text-blue-600 font-medium text-sm hover:underline">
// //             View Details →
// //           </span>
// //         </div>
// //       </motion.div>
// //     </Link>
// //   );
// // }


// import React from "react";
// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <Link to={`/courses/${course.slug}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
//       <img src={course.image} alt={course.name} className="w-full h-48 object-cover"/>
//       <div className="p-3 flex flex-col gap-1">
//         <h3 className="font-bold">{course.name}</h3>
//         <p className="text-gray-500 text-sm">{course.title}</p>
//         <div className="flex justify-between items-center mt-2 text-sm">
//           <span>{course.courses} Courses</span>
//           <span className="text-yellow-500">⭐ {course.rating}</span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       whileTap={{ scale: 0.97 }}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <Link to={`/courses/${course.id}`}>
//         <div className="border rounded-xl bg-white hover:shadow-xl transition">
//           <div className="bg-[#E9FFB5] px-4 py-2 text-sm font-medium">
//             Free course
//           </div>

//           <div className="p-4">
//             <h3 className="font-semibold text-lg mb-2 line-clamp-2">
//               {course.title}
//             </h3>

//             <p className="text-sm text-gray-600 line-clamp-3 mb-4">
//               {course.description}
//             </p>

//             <div className="border-t pt-3 flex justify-between text-sm">
//               <span>⭐ {course.rating}</span>
//               <span>{course.hours} hours</span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function CourseCard({ course }) {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className="bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
//       onClick={() => navigate(`/courses/${course.slug}`)}
//     >
//       <img
//         src={course.image}
//         alt={course.title}
//         className="h-44 w-full object-cover"
//       />

//       <div className="p-4 space-y-2">
//         <h3 className="font-semibold text-gray-900 line-clamp-2">
//           {course.title}
//         </h3>

//         <p className="text-sm text-gray-500">{course.instructor}</p>

//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-yellow-500 font-medium">
//             ⭐ {course.rating}
//           </span>
//         </div>

//         <p className="font-semibold text-gray-900">
//           ${course.price}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function CourseCard({ course }) {
//   return (
//     <div className="border rounded shadow-sm hover:shadow-md transition p-4 bg-white">
//       <div className="text-sm font-mono text-green-100 bg-green-50 px-2 py-1 rounded mb-2 inline-block">
//         {course.price === 0 ? "Free course" : "Course"}
//       </div>
//       <h3 className="font-bold text-lg mb-1">{course.title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{course.description}</p>
//       <div className="flex justify-between text-xs text-gray-500 font-semibold">
//         <span>{course.level} Friendly</span>
//         <span>{course.duration} hours</span>
//       </div>
//     </div>
//   );
// }
// export default function CourseCard({ course }) {
//   return (
//     <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col justify-between">
      
//       {/* Badge */}
//       <div className="bg-[#E9FFD1] text-xs font-medium px-3 py-2 rounded-t-lg">
//         {course.price === 0 ? "Free course" : "Course"}
//       </div>

//       {/* Content */}
//       <div className="p-5 flex-1">
//         <h3 className="text-lg font-semibold mb-2">
//           {course.title}
//         </h3>
//         <p className="text-sm text-gray-600 line-clamp-3">
//           {course.description}
//         </p>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-dotted mx-5"></div>

//       {/* Footer */}
//       <div className="p-5 flex items-center justify-between text-sm text-gray-700">
//         <span className="flex items-center gap-1">
//           📊 {course.level}
//         </span>
//         <span>{course.duration} hours</span>
//       </div>
//     </div>
//   );
// }

// export default function CourseCard({ course }) {
//   return (
//     <div className="group bg-white dark:bg-gray-900 rounded-xl
//                     border dark:border-gray-800
//                     transition-all duration-300
//                     hover:-translate-y-1 hover:shadow-xl
//                     hover:border-primary flex flex-col">

//       {/* BADGES */}
//       <div className="flex justify-between px-4 pt-4">
//         <span className="text-xs px-2 py-1 rounded-full bg-green-100
//                          text-green-700 dark:bg-green-900 dark:text-green-300">
//           {course.price === 0 ? "Free" : "Paid"}
//         </span>
//         <span className="text-xs px-2 py-1 rounded-full bg-blue-100
//                          text-blue-700 dark:bg-blue-900 dark:text-blue-300">
//           {course.level}
//         </span>
//       </div>

//       {/* CONTENT */}
//       <div className="p-4 flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//           {course.title}
//         </h3>
//         <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//           {course.description}
//         </p>
//       </div>

//       {/* PROGRESS */}
//       <div className="px-4">
//         <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-primary"
//             style={{ width: `${course.progress || 30}%` }}
//           />
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="p-4 flex justify-between text-sm text-gray-500">
//         <span>⏱ {course.duration} hrs</span>
//         <span className="group-hover:text-primary font-medium">
//           View →
//         </span>
//       </div>
//     </div>
//   );
// }
// export default function CourseCard({ course }) {
//   return (
//     <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500">
      
//       {/* Badge */}
//       <div className="bg-lime-200 text-gray-900 px-4 py-2 text-sm font-semibold">
//         {course.price === 0 ? "Free course" : "Paid course"}
//       </div>

//       <div className="p-5 space-y-3">
//         <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600">
//           {course.title}
//         </h3>

//         <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//           {course.description}
//         </p>

//         <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700 text-sm">
//           <span className="font-medium text-gray-700 dark:text-gray-300">
//             📊 {course.level}
//           </span>
//           <span className="font-semibold text-gray-900 dark:text-white">
//             ⏱ {course.duration} hours
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

// Skeleton Loader Component
// function CourseCardSkeleton() {
//   return (
//     <div className="animate-pulse bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//       <div className="h-40 bg-gray-200 w-full"></div>
//       <div className="p-5 space-y-3">
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//         <div className="h-3 bg-gray-200 rounded w-full"></div>
//         <div className="h-3 bg-gray-200 rounded w-5/6"></div>
//         <div className="pt-4 border-t border-gray-200 flex justify-between text-sm">
//           <div className="h-3 bg-gray-200 rounded w-1/4"></div>
//           <div className="h-3 bg-gray-200 rounded w-1/4"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CourseCard({ course, loading }) {
//   if (loading) return <CourseCardSkeleton />;

//   return (
//     <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500">
      
//       {/* Card Image */}
//       <div className="h-40 w-full overflow-hidden">
//         <img
//           src={course.image || "/placeholder.jpg"}
//           alt={course.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Badge */}
//       <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//         {course.price === 0 ? "Free" : "Paid"}
//       </div>

//       <div className="p-5 space-y-3">
//         <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
//           {course.title}
//         </h3>

//         <p className="text-sm text-gray-600 line-clamp-3">
//           {course.description}
//         </p>

//         <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
//           <span className="font-medium text-gray-700">
//             📊 {course.level}
//           </span>
//           <span className="font-semibold text-gray-900">
//             ⏱ {course.duration} hrs
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function CourseCard({ course, loading }) {
//   if (loading) return <CourseCardSkeleton />;

//   return (
//     <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500">
      
//       {/* Card Image */}
//       <div className="h-48 w-full overflow-hidden">
//         <img
//           src={course.image || "/default-course.jpg"} // fallback image
//           alt={course.title}
//           onError={(e) => e.target.src = "/default-course.jpg"} // fallback if fetch fails
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Badge */}
//       <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
//         {course.price === 0 ? "Free" : "Paid"}
//       </div>

//       <div className="p-5 space-y-3">
//         <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
//           {course.title}
//         </h3>

//         <p className="text-sm text-gray-600 line-clamp-3">
//           {course.description}
//         </p>

//         <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
//           <span className="font-medium text-gray-700">
//             📊 {course.level}
//           </span>
//           <span className="font-semibold text-gray-900">
//             ⏱ {course.duration} hrs
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function CourseCard({ course }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500 transition-all duration-300">

      {/* Card Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={course.image || "https://source.unsplash.com/400x200/?code"}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Badge */}
      <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
        {course.price === 0 ? "Free" : "Paid"}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
          <span className="font-medium text-gray-700">📊 {course.level}</span>
          <span className="font-semibold text-gray-900">⏱ {course.duration} hrs</span>
        </div>
      </div>
    </div>
  );
}
