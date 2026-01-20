

// import React from "react";
// import { instructorsData } from "../api/dummyData"; // Make sure this path is correct
// import InstructorCard from "../components/InstructorCard";

// export default function Instructors() {
//   return (
//     <main className="pt-24 max-w-7xl mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-6">All Instructors</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {instructorsData.length > 0 ? (
//           instructorsData.map(instr => (
//             <InstructorCard key={instr.id} instructor={instr} />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             No instructors found.
//           </p>
//         )}
//       </div>
//     </main>
//   );
// }
import React from "react";
import { instructorsData } from "../api/dummyData"; // Make sure this path is correct
import InstructorCard from "../components/InstructorCard";
import PageHero from "../components/PageHero.jsx";

export default function Instructors() {
  return (
    <div className="mt-20 bg-gray-50 min-h-screen">
      {/* ===== MODERN HERO SECTION ===== */}
     <PageHero
  title="Expert Instructors"
  subtitle="Learn from professionals with real-world experience."
  breadcrumb={["Home", "Instructors"]}
/>


      {/* ===== MAIN CONTENT ===== */}
      <main className="pt-24 max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">All Instructors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructorsData.length > 0 ? (
            instructorsData.map(instr => (
              <InstructorCard key={instr.id} instructor={instr} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-6">
              No instructors found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
