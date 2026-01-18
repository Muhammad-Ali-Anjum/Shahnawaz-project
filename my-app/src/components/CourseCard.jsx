// import { Star } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <Link
//       to={`/courses/${course.slug}`}
//       className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
//     >
//       <img
//         src={course.image}
//         alt={course.title}
//         className="rounded-lg w-full h-40 object-cover mb-4"
//       />
//       <div className="flex items-center justify-between mb-1">
//         <span className="text-xs font-medium text-blue-600">{course.category}</span>
//         <div className="flex items-center gap-1 text-yellow-500 text-xs">
//           <Star size={14} /> {course.rating.toFixed(1)}
//         </div>
//       </div>
//       <h3 className="font-semibold text-sm mb-2">{course.title}</h3>
//       <p className="text-sm font-medium text-gray-700">${course.price}</p>
//     </Link>
//   );
// }


import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-bold">{course.title}</h3>
        <p className="text-gray-500 text-sm">{course.category}</p>
        <p className="text-gray-700 mt-1">${course.price}</p>
      </div>
    </Link>
  );
}
