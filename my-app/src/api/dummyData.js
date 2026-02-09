


// src/data/dummyData.js
export const categoriesData = [
  { _id: 1, name: "Web Development", slug: "web-development" },
  { _id: 2, name: "Mobile App Development", slug: "mobile-app-development" },
  { _id: 3, name: "AI / ML", slug: "ai-ml" },
  { _id: 4, name: "Graphic Design & UX/UI", slug: "graphic-design" },
  { _id: 5, name: "Digital Marketing", slug: "digital-marketing" },
  { _id: 6, name: "Game Development", slug: "game-development" },
  { _id: 7, name: "APP Development", slug: "game-development" },
];


export const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    slug: "react-for-beginners",
    category: "Web Development",
    rating: 4.8,
    price: 49,
    image: "https://picsum.photos/400/300?random=1",
    description: "Learn React from scratch.",
    instructor: "Muhammad Ali Anjum",
    instructorSlug: "muhammad-ali-anjum",
  },
  {
    id: 2,
    title: "Complete Python Bootcamp",
    slug: "complete-python-bootcamp",
    category: "AI / ML",
    rating: 4.7,
    price: 39,
    image: "https://picsum.photos/400/300?random=2",
    description: "Master Python with projects.",
    instructor: "Sara Ahmed",
    instructorSlug: "sara-ahmed",
  },
  // rest same…
];

// Instructors
export const instructorsData = [
  { id: 1, name: "Muhammad Ali Anjum", slug: "muhammad-ali-anjum", title: "Senior React Developer", courses: 5, rating: 4.8, image: "https://picsum.photos/400/400?random=11", bio: "Ali has 10 years of experience building scalable React apps.", experience: ["React Developer at XYZ - 2015-2018","Frontend Lead at ABC - 2018-2021","Senior React Developer at Tech Solutions - 2021-Present"], education: ["BSc in Computer Science, University of Karachi","MSc in Software Engineering, NED University"] },
  { id: 2, name: "Sara Ahmed", slug: "sara-ahmed", title: "UI/UX Designer", courses: 3, rating: 4.9, image: "https://picsum.photos/400/400?random=12", bio: "Sara creates intuitive user experiences.", experience: ["UI/UX Designer at Creative Studio - 2016-2019","Senior Designer at PixelWorks - 2019-Present"], education: ["BDes in Visual Communication, Indus University","Certification in UX Design, Coursera"] },
   { id: 3, name: "Muhammad Ali Anjum", slug: "muhammad-ali-anjum", title: "Senior React Developer", courses: 5, rating: 4.8, image: "https://picsum.photos/400/400?random=11", bio: "Ali has 10 years of experience building scalable React apps.", experience: ["React Developer at XYZ - 2015-2018","Frontend Lead at ABC - 2018-2021","Senior React Developer at Tech Solutions - 2021-Present"], education: ["BSc in Computer Science, University of Karachi","MSc in Software Engineering, NED University"] },
    { id: 4, name: "Muhammad Ali Anjum", slug: "muhammad-ali-anjum", title: "Senior React Developer", courses: 5, rating: 4.8, image: "https://picsum.photos/400/400?random=11", bio: "Ali has 10 years of experience building scalable React apps.", experience: ["React Developer at XYZ - 2015-2018","Frontend Lead at ABC - 2018-2021","Senior React Developer at Tech Solutions - 2021-Present"], education: ["BSc in Computer Science, University of Karachi","MSc in Software Engineering, NED University"] },
     { id: 5, name: "Muhammad Ali Anjum", slug: "muhammad-ali-anjum", title: "Senior React Developer", courses: 5, rating: 4.8, image: "https://picsum.photos/400/400?random=11", bio: "Ali has 10 years of experience building scalable React apps.", experience: ["React Developer at XYZ - 2015-2018","Frontend Lead at ABC - 2018-2021","Senior React Developer at Tech Solutions - 2021-Present"], education: ["BSc in Computer Science, University of Karachi","MSc in Software Engineering, NED University"] },
      { id: 6, name: "Muhammad Ali Anjum", slug: "muhammad-ali-anjum", title: "Senior React Developer", courses: 5, rating: 4.8, image: "https://picsum.photos/400/400?random=11", bio: "Ali has 10 years of experience building scalable React apps.", experience: ["React Developer at XYZ - 2015-2018","Frontend Lead at ABC - 2018-2021","Senior React Developer at Tech Solutions - 2021-Present"], education: ["BSc in Computer Science, University of Karachi","MSc in Software Engineering, NED University"] },
];

// Footer
export const footerData = {
  about: "LMS Platform is a modern online learning platform with top courses & instructors.",
  links: [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Instructors", path: "/instructors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  contact: { email: "anjumbalgharii@gmail.com", phone: "+923411388226", address: "Skardu, Gilgit Baltistan, Pakistan" },
};

