// // Categories
// export const categoriesData = [
//   { _id: 1, name: "Web Development", slug: "web-development", icon: "🌐" },
//   { _id: 2, name: "Mobile App Development", slug: "mobile-app-development", icon: "📱" },
//   { _id: 3, name: "AI / ML", slug: "ai-ml", icon: "🤖" },
//   { _id: 4, name: "Graphic Design & UX/UI", slug: "graphic-design", icon: "🎨" },
//   { _id: 5, name: "Digital Marketing", slug: "digital-marketing", icon: "📈" },
// ];




// // Instructors
// export const instructorsData = [
//   {
//     id: 1,
//     name: "Ali Khan",
//     slug: "ali-khan",
//     title: "Senior React Developer",
//     courses: 12,
//     image: "https://source.unsplash.com/200x200/?man,face",
//     bio: "Ali has 10 years of experience building web applications using React.",
//   },
//   {
//     id: 2,
//     name: "Sara Ahmed",
//     slug: "sara-ahmed",
//     title: "UI/UX Designer",
//     courses: 8,
//     image: "https://source.unsplash.com/200x200/?woman,face",
//     bio: "Sara is a professional UI/UX designer with a passion for clean design.",
//   },
// ];

// // Footer
// export const footerData = {
//   about: "LMS Platform is a modern online learning platform offering top-quality courses and expert instructors.",
//   links: [
//     { name: "Home", path: "/" },
//     { name: "Courses", path: "/courses" },
//     { name: "Instructors", path: "/instructors" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact", path: "/contact" },
//   ],
//   contact: {
//     email: "anjumbalgharii@gmail.com",
//     phone: "+923411388226",
//     address: "skardu, Giglit Baltistan, pakistan",
//   },
// };

// export const coursesData = [
//   {
//     id: 1,
//     title: "React for Beginners",
//     slug: "react-for-beginners",

//     // 🔑 important relations
//     category: "Web Development",
//     categorySlug: "web-development",

//     instructor: "Ali Khan",
//     instructorSlug: "ali-khan",

//     rating: 4.8,
//     reviews: 120,
//     students: 850,

//     price: 49,
//     discountPrice: 29, // optional
//     level: "Beginner",
//     duration: "12h 30m",

//     image: "https://source.unsplash.com/400x300/?coding,react",

//     description:
//       "Learn React from scratch and build modern web applications.",

//     syllabus: [
//       "React Basics",
//       "JSX & Components",
//       "State & Props",
//       "Hooks",
//       "Project Build",
//     ],

//     isFeatured: true,
//   },
// ];

// Categories
export const categoriesData = [
  { _id: 1, name: "Web Development", slug: "web-development" },
  { _id: 2, name: "Mobile App Development", slug: "mobile-app-development" },
  { _id: 3, name: "AI / ML", slug: "ai-ml" },
  { _id: 4, name: "Graphic Design & UX/UI", slug: "graphic-design" },
  { _id: 5, name: "Digital Marketing", slug: "digital-marketing" },
];

// Courses
export const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    slug: "react-for-beginners",
    category: "Web Development",
    rating: 4.8,
    price: 49,
    image: "https://picsum.photos/400/300?random=1",
    description: "Learn React from scratch and build modern web applications.",
    instructor: "Ali Khan",
    instructorSlug: "ali-khan"
  },
  {
    id: 2,
    title: "Complete Python Bootcamp",
    slug: "complete-python-bootcamp",
    category: "AI / ML",
    rating: 4.7,
    price: 39,
    image: "https://picsum.photos/400/300?random=2",
    description: "Master Python with hands-on exercises and real projects.",
    instructor: "Sara Ahmed",
    instructorSlug: "sara-ahmed"
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    slug: "ui-ux-design",
    category: "Graphic Design & UX/UI",
    rating: 4.9,
    price: 59,
    image: "https://picsum.photos/400/300?random=3",
    description: "Learn the basics of UI/UX design with real projects.",
    instructor: "Sara Ahmed",
    instructorSlug: "sara-ahmed"
  },
  {
    id: 4,
    title: "Advanced JavaScript",
    slug: "advanced-javascript",
    category: "Web Development",
    rating: 4.8,
    price: 55,
    image: "https://picsum.photos/400/300?random=4",
    description: "Deep dive into JavaScript concepts and advanced topics.",
    instructor: "Ali Khan",
    instructorSlug: "ali-khan"
  },
  {
    id: 5,
    title: "iOS App Development",
    slug: "ios-app-development",
    category: "Mobile App Development",
    rating: 4.6,
    price: 60,
    image: "https://picsum.photos/400/300?random=5",
    description: "Build and deploy iOS applications with Swift and Xcode.",
    instructor: "John Doe",
    instructorSlug: "john-doe"
  },
  {
    id: 6,
    title: "Android App Development",
    slug: "android-app-development",
    category: "Mobile App Development",
    rating: 4.7,
    price: 65,
    image: "https://picsum.photos/400/300?random=6",
    description: "Create Android apps using Kotlin and Android Studio.",
    instructor: "Jane Smith",
    instructorSlug: "jane-smith"
  },
  {
    id: 7,
    title: "Machine Learning A-Z",
    slug: "machine-learning-a-z",
    category: "AI / ML",
    rating: 4.9,
    price: 70,
    image: "https://picsum.photos/400/300?random=7",
    description: "Learn ML algorithms and build real AI projects.",
    instructor: "Sara Ahmed",
    instructorSlug: "sara-ahmed"
  },
  {
    id: 8,
    title: "Graphic Design Masterclass",
    slug: "graphic-design-masterclass",
    category: "Graphic Design & UX/UI",
    rating: 4.8,
    price: 50,
    image: "https://picsum.photos/400/300?random=8",
    description: "Become a professional graphic designer using Photoshop & Illustrator.",
    instructor: "Michael Lee",
    instructorSlug: "michael-lee"
  },
  {
    id: 9,
    title: "Digital Marketing Complete Guide",
    slug: "digital-marketing-guide",
    category: "Digital Marketing",
    rating: 4.7,
    price: 45,
    image: "https://picsum.photos/400/300?random=9",
    description: "Learn SEO, social media marketing, PPC, and more.",
    instructor: "Emily Davis",
    instructorSlug: "emily-davis"
  },
  {
    id: 10,
    title: "Full Stack Development Bootcamp",
    slug: "full-stack-development",
    category: "Web Development",
    rating: 4.9,
    price: 80,
    image: "https://picsum.photos/400/300?random=10",
    description: "Learn both frontend and backend development in one course.",
    instructor: "Ali Khan",
    instructorSlug: "ali-khan"
  }
];

// Instructors
export const instructorsData = [
  { id: 1, name: "Ali Khan", slug: "ali-khan", title: "Senior React Developer", courses: 3, image: "https://picsum.photos/200/200?random=1", bio: "Ali has 10 years of experience building web applications using React." },
  { id: 2, name: "Sara Ahmed", slug: "sara-ahmed", title: "UI/UX Designer & AI Specialist", courses: 3, image: "https://picsum.photos/200/200?random=2", bio: "Sara is a professional UI/UX designer with a passion for clean design and AI projects." },
  { id: 3, name: "John Doe", slug: "john-doe", title: "iOS Developer", courses: 1, image: "https://picsum.photos/200/200?random=3", bio: "John builds iOS apps and teaches Swift development." },
  { id: 4, name: "Jane Smith", slug: "jane-smith", title: "Android Developer", courses: 1, image: "https://picsum.photos/200/200?random=4", bio: "Jane specializes in Android apps using Kotlin." },
  { id: 5, name: "Michael Lee", slug: "michael-lee", title: "Graphic Designer", courses: 1, image: "https://picsum.photos/200/200?random=5", bio: "Michael is a professional graphic designer." },
  { id: 6, name: "Emily Davis", slug: "emily-davis", title: "Digital Marketing Expert", courses: 1, image: "https://picsum.photos/200/200?random=6", bio: "Emily teaches all aspects of digital marketing." },
  { id: 7, name: "Robert Brown", slug: "robert-brown", title: "Full Stack Developer", courses: 1, image: "https://picsum.photos/200/200?random=7", bio: "Robert specializes in full stack web development." },
  { id: 8, name: "Linda Johnson", slug: "linda-johnson", title: "Python Developer", courses: 1, image: "https://picsum.photos/200/200?random=8", bio: "Linda teaches Python with real projects." },
  { id: 9, name: "William Clark", slug: "william-clark", title: "Machine Learning Expert", courses: 1, image: "https://picsum.photos/200/200?random=9", bio: "William works on ML and AI projects." },
  { id: 10, name: "Sophia Wilson", slug: "sophia-wilson", title: "UI/UX Designer", courses: 1, image: "https://picsum.photos/200/200?random=10", bio: "Sophia teaches UI/UX design professionally." }
];

// Footer
export const footerData = {
  about: "LMS Platform is a modern online learning platform offering top-quality courses and expert instructors.",
  links: [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Instructors", path: "/instructors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  contact: {
    email: "anjumbalgharii@gmail.com",
    phone: "+923411388226",
    address: "Skardu, Gilgit Baltistan, Pakistan"
  }
};
