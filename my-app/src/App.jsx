// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import CourseDetails from "./pages/CourseDetails";
// import Instructors from "./pages/Instructors";
// import InstructorDetails from "./pages/InstructorDetails";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import BlogDetails from "./pages/BlogDetails";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* Courses */}
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/courses/:categorySlug" element={<Courses />} />
//         <Route path="/courses/:slug" element={<CourseDetails />} />

//         {/* Instructors */}
//         <Route path="/instructors" element={<Instructors />} />
//         <Route
//           path="/instructors/:slug"
//           element={<InstructorDetails />}
//         />

//         {/* Static Pages */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/:id/:slug" element={<BlogDetails />} />

//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Instructors from "./pages/Instructors";
import InstructorDetails from "./pages/InstructorDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// Context
import BlogProvider from "./context/BlogContext.jsx";
import CourseProvider from "./context/CourseContext.jsx"; // <-- Add this

function App() {
  return (
    <BlogProvider>
      <CourseProvider> {/* <-- Wrap your app with CourseProvider */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Courses */}
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:categorySlug" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} /> */}
           <Route path="/courses" element={<Courses />} />
        <Route path="/courses/category/:categorySlug" element={<Courses />} />
        <Route path="/courses/details/:slug" element={<CourseDetails />} />

          {/* Instructors */}
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:slug" element={<InstructorDetails />} />

          {/* Static Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id/:slug" element={<BlogDetails />} />
        </Routes>

        <Footer />
      </CourseProvider>
    </BlogProvider>
  );
}

export default App;
