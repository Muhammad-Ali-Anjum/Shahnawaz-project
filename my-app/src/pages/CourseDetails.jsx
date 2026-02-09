// // import { useParams } from "react-router-dom";
// // import { coursesData, instructorsData } from "../api/dummyData";

// // export default function CourseDetails() {
// //   const { slug } = useParams();
// //   const course = coursesData.find(c => c.slug === slug);
// //   if (!course) return <p className="mt-28 text-center">Course not found</p>;

// //   const instructor = instructorsData.find(i => i.slug === course.instructorSlug);

// //   return (
// //     <div className="max-w-4xl mx-auto px-6 mt-28">
// //       <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-lg" />
// //       <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
// //       <p className="text-gray-500 mt-1">{course.category}</p>
// //       <p className="mt-4 text-gray-700">{course.description}</p>
// //       {instructor && (
// //         <div className="mt-6">
// //           <h2 className="text-2xl font-semibold">Instructor</h2>
// //           <div className="flex items-center gap-4 mt-2">
// //             <img src={instructor.image} alt={instructor.name} className="w-16 h-16 rounded-full" />
// //             <div>
// //               <p className="font-bold">{instructor.name}</p>
// //               <p className="text-gray-500">{instructor.title}</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // import { useParams } from "react-router-dom";
// // import { coursesData } from "../api/dummyData";

// // export default function CourseDetails() {
// //   const { slug } = useParams();
// //   const course = coursesData.find(c => c.slug === slug);

// //   if (!course) return <p className="mt-32 text-center">Course not found</p>;

// //   return (
// //     <div className="max-w-4xl mx-auto px-6 mt-28">
// //       <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-lg"/>
// //       <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
// //       <p className="text-gray-500 mt-2">{course.category}</p>
// //       <p className="mt-4 text-gray-700">{course.description}</p>
// //       <p className="mt-2 font-semibold">Instructor: {course.instructor}</p>
// //       <p className="mt-2 font-semibold">Price: ${course.price}</p>
// //       <p className="mt-2 font-semibold">Rating: {course.rating} ⭐</p>
// //     </div>
// //   );
// // }


// import { useParams } from "react-router-dom";
// import { courses } from "../api/courses";

// export default function CourseDetails() {
//   const { slug } = useParams();
//   const course = courses.find(c => c.slug === slug);

//   if (!course) return <p className="mt-32 text-center">Course not found</p>;

//   return (
//     <div className="max-w-4xl mx-auto px-6 mt-28">
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
//       <p className="text-gray-500 mt-2">{course.category}</p>
//       <p className="mt-4 text-gray-700">{course.description}</p>
//       <p className="mt-2 font-semibold">Instructor: {course.instructor}</p>
//       <p className="mt-2 font-semibold">Price: ${course.price}</p>
//       <p className="mt-2 font-semibold">Rating: {course.rating} ⭐</p>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { courses } from "../api/courses";

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) return <p className="mt-32 text-center">Course not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 mt-28">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-500 mt-2">{course.category}</p>

      {/* Full Description */}
      <p className="mt-4 text-gray-700">{course.description}</p>

      <p className="mt-2 font-semibold">Instructor: {course.instructor}</p>
      <p className="mt-2 font-semibold">Price: ${course.price}</p>
      <p className="mt-2 font-semibold">Rating: {course.rating} ⭐</p>
    </div>
  );
}
