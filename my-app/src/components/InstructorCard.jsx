

// import React from "react";

// export default function InstructorCard({ instructor }) {
//   const fullStars = Math.floor(instructor.rating);
//   const halfStar = instructor.rating % 1 >= 0.5;

//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition text-center">
//       <img
//         src={instructor.image}
//         alt={instructor.name}
//         className="w-24 h-24 rounded-full mx-auto"
//       />
//       <h3 className="mt-2 font-bold">{instructor.name}</h3>
//       <p className="text-gray-500">{instructor.title}</p>
//       <div className="flex justify-center items-center mt-2">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <span key={i} className="text-yellow-400">★</span>
//         ))}
//         {halfStar && <span className="text-yellow-400">½</span>}
//         <span className="ml-2 text-gray-600">{instructor.rating}</span>
//       </div>
//       <p className="mt-1 text-sm text-gray-500">{instructor.courses} courses</p>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// export default function InstructorCard({ instructor }) {
//   const fullStars = Math.floor(instructor.rating || 0);
//   const halfStar = instructor.rating % 1 >= 0.5;

//   return (
//     <Link to={`/instructors/${instructor.slug}`}>
//       <div className="border rounded-lg shadow hover:shadow-xl transition duration-300 bg-white flex flex-col items-center p-4">
//         <img
//           src={instructor.image}
//           alt={instructor.name}
//           className="w-full h-48 object-cover rounded-lg mb-4"
//         />

//         <h3 className="text-lg font-bold text-center">{instructor.name}</h3>
//         <p className="text-gray-500 text-sm text-center">{instructor.title}</p>

//         <div className="flex justify-center items-center mt-2">
//           {Array.from({ length: fullStars }).map((_, i) => (
//             <span key={i} className="text-yellow-400 text-sm">★</span>
//           ))}
//           {halfStar && <span className="text-yellow-400 text-sm">½</span>}
//           <span className="text-gray-600 text-sm ml-1">{instructor.rating}</span>
//         </div>

//         <p className="text-gray-500 text-sm mt-1">{instructor.courses} courses</p>
//       </div>
//     </Link>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function InstructorCard({ instructor }) {
  return (
    <Link to={`/instructors/${instructor.slug}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={instructor.image} alt={instructor.name} className="w-full h-48 object-cover"/>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-bold">{instructor.name}</h3>
        <p className="text-gray-500 text-sm">{instructor.title}</p>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span>{instructor.courses} Courses</span>
          <span className="text-yellow-500">⭐ {instructor.rating}</span>
        </div>
      </div>
    </Link>
  );
}
