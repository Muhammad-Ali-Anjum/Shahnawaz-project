import { useParams, Link } from "react-router-dom";
import { instructorsData, coursesData } from "../api/dummyData"; // ✅ Correct path

export default function InstructorDetails() {
  const { slug } = useParams();
  const instructor = instructorsData.find(i => i.slug === slug);

  if (!instructor) return <p className="mt-32 text-center">Instructor not found</p>;

  const instructorCourses = coursesData.filter(c => c.instructorSlug === slug);

  return (
    <div className="max-w-4xl mx-auto px-6 mt-28">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-48 h-48 rounded-full mx-auto"
      />
      <h1 className="text-3xl font-bold mt-4 text-center">{instructor.name}</h1>
      <p className="text-gray-500 text-center">{instructor.title}</p>
      <p className="mt-4 text-gray-700">{instructor.bio}</p>

      <h2 className="text-2xl font-semibold mt-6">Courses by {instructor.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {instructorCourses.length > 0 ? (
          instructorCourses.map(course => (
            <Link
              key={course.id}
              to={`/courses/${course.slug}`}
              className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
}
