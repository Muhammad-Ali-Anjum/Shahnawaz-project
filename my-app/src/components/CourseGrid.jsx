// import CourseCard from "./CourseCard.jsx";
// import CourseSkeleton from "./CourseSkeleton.jsx";

// export default function CourseGrid({ courses, loading }) {
//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Array.from({ length: 12 }).map((_, i) => (
//           <CourseSkeleton key={i} />
//         ))}
//       </div>
//     );
//   }

//   if (!courses.length)
//     return <p className="text-center text-gray-500">No courses found.</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {courses.map((course) => (
//         <CourseCard key={course.id} course={course} />
//       ))}
//     </div>
//   );
// }
// import CourseCard from "./CourseCard";

// export default function CourseGrid({ courses }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//       {courses.map((course) => (
//         <CourseCard key={course.id} course={course} />
//       ))}
//     </div>
//   );
// }

import CourseCard from "./CourseCard";
import CourseSkeleton from "./CourseSkeleton";

export default function CourseGrid({ courses, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <CourseSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
