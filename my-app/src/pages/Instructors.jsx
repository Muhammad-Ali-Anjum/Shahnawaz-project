// import { useEffect, useState } from "react";
// import InstructorCard from "../components/InstructorCard";
// import { categoriesData } from "../api/dummyData";


// export default function Courses() {
//   const [instructors, setInstructors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const dummyinstructors = [
//       {
//         id: 1,
//         title: "Full stack Develooper",
//         name:"Muhammad Ali Anjum",
//         slug: "react-for-beginners",
//         category: "Web Devloper",
//         rating: 4.8,
    
//         image: "https://source.unsplash.com/400x300/?coding,react",
//       },
//        {
//         id: 1,
//         title: "Full stack Develooper",
//         name:"Muhammad Ali Anjum",
//         slug: "react-for-beginners",
//         category: "Game Devloper",
//         rating: 4.8,
    
//         image: "https://source.unsplash.com/400x300/?coding,react",
//       },
//        {
//         id: 1,
//         title: "Full stack Develooper",
//         name:"Muhammad Ali Anjum",
//         slug: "react-for-beginners",
//         category: "App Devloper",
//         rating: 4.8,
    
//         image: "https://source.unsplash.com/400x300/?coding,react",
//       },
//       {
//         id: 2,
//         title: "Python",
//         name:"Muhammad Ali Anjum",
//         slug: "python",
//         category: "AI / ML",
//         rating: 4.7,
     
//         image: "https://source.unsplash.com/400x300/?python,coding",
//       },
//        {
//         id: 1,
//         title: "Full stack Develooper",
//         name:"Muhammad Ali Anjum",
//         slug: "react-for-beginners",
//         category: "Graphic design",
//         rating: 4.8,
    
//         image: "https://source.unsplash.com/400x300/?coding,react",
//       },
//       {
//         id: 3,
//         name:"Muhammad Ali Anjum",
//         title: "UI/UX Design",
//         slug: "ui-ux-design",
//         category: "Graphic Design & UX/UI",
//         rating: 4.9,
       
//         image: "https://source.unsplash.com/400x300/?design,ui",
//       },
//       {
//         id: 4,
//         title: "Digital Marketing ",
//         name:"Muhammad Ali Anjum",
//         slug: "digital-marketing",
//         category: "Digital Marketing",
//         rating: 4.6,
    
//         image: "https://source.unsplash.com/400x300/?marketing,digital",
//       },
//     ];

//     setTimeout(() => {
//       setInstructors(dummyinstructors);
//       setLoading(false);
//     }, 500);
//   }, []);

//   return (
//     <main className="pt-20 max-w-7xl mx-auto px-4">
//       <h1 className="text-2xl font-bold mb-6">All instructors</h1>
//       {loading ? (
//         <p>Loading instructors...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {instructors.map((instructor) => (
//             <InstructorCard key={instructor.id} instructor={instructor} />
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

import { instructorsData } from "../api/dummyData";
import InstructorCard from "../components/InstructorCard";

export default function Instructors() {
  return (
    <main className="pt-28 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">All Instructors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructorsData.map(inst => <InstructorCard key={inst.id} instructor={inst} />)}
      </div>
    </main>
  );
}
