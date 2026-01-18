

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

import React from "react";

export default function InstructorCard({ instructor }) {
  const fullStars = Math.floor(instructor.rating);
  const halfStar = instructor.rating % 1 >= 0.5;

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition text-center">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="mt-2 font-bold">{instructor.name}</h3>
      <p className="text-gray-500">{instructor.title}</p>
      <div className="flex justify-center items-center mt-2">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">½</span>}
        <span className="ml-2 text-gray-600">{instructor.rating}</span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{instructor.courses} courses</p>
    </div>
  );
}
