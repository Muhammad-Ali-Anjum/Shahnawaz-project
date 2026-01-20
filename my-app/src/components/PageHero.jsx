// import React from "react";

// export default function PageHero({
//   title,
//   subtitle,
//   breadcrumb = [],
// }) {
//   return (
//     <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white py-28 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Breadcrumb */}
//         {breadcrumb.length > 0 && (
//           <nav className="mb-6 text-sm text-blue-200">
//             {breadcrumb.map((item, index) => (
//               <span key={index}>
//                 {item}
//                 {index < breadcrumb.length - 1 && " / "}
//               </span>
//             ))}
//           </nav>
//         )}

//         {/* Title */}
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
//           {title}
//         </h1>

//         {/* Subtitle */}
//         {subtitle && (
//           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
//             {subtitle}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <nav className="text-sm mb-2">
          {breadcrumb.map((item, idx) => (
            <span key={idx}>
              {item} {idx < breadcrumb.length - 1 && "→"}{" "}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-100">{subtitle}</p>
      </div>
    </section>
  );
}
