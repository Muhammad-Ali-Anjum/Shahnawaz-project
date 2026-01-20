// import React, { createContext, useEffect, useState } from "react";

// export const CourseContext = createContext();

// export default function CourseProvider({ children }) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         const res = await fetch("https://dummyjson.com/products?limit=100");
//         const data = await res.json();
//         // data.products is the array
//         setCourses(data.products || []);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch courses:", err);
//         setLoading(false);
//       }
//     }

//     fetchCourses();
//   }, []);

//   return (
//     <CourseContext.Provider value={{ courses, loading }}>
//       {children}
//     </CourseContext.Provider>
//   );
// }
// import React, { createContext, useEffect, useState } from "react";

// export const CourseContext = createContext();

// export default function CourseProvider({ children }) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         const res = await fetch("https://dummyjson.com/products?limit=50"); // API
//         const data = await res.json();

//         // Map API data to LMS course style
//         const mappedCourses = data.products.map((c) => ({
//           id: c.id,
//           title: c.title,
//           description: c.description,
//           category: c.category,
//           thumbnail: c.thumbnail,
//           instructor: c.brand || "John Doe",
//           rating: (c.rating || 4.5).toFixed(1),
//           students: Math.floor(Math.random() * 2000) + 50, // random student count
//         }));

//         setCourses(mappedCourses);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch courses:", err);
//         setLoading(false);
//       }
//     }

//     fetchCourses();
//   }, []);

//   return (
//     <CourseContext.Provider value={{ courses, loading }}>
//       {children}
//     </CourseContext.Provider>
//   );
// }

// import { createContext, useEffect, useState } from "react";
// import { coursesData } from "../api/dummyData";

// export const CourseContext = createContext();

// export default function CourseProvider({ children }) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // simulate API delay
//     setTimeout(() => {
//       setCourses(coursesData);
//       setLoading(false);
//     }, 1200);
//   }, []);

//   return (
//     <CourseContext.Provider value={{ courses, loading }}>
//       {children}
//     </CourseContext.Provider>
//   );
// }
import { createContext, useEffect, useState } from "react";
import { coursesData } from "../api/dummyData"; // <-- updated path

export const CourseContext = createContext();

export default function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setCourses(coursesData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <CourseContext.Provider value={{ courses, loading }}>
      {children}
    </CourseContext.Provider>
  );
}
