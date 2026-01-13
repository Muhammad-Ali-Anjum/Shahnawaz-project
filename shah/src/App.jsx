import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

import Home from "./page/Home.jsx";
import Courses from "./page/Courses.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Login from "./page/Login.jsx";
import Footer from "./Component/footer.jsx";


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    
    </>
  );
};

export default App;
