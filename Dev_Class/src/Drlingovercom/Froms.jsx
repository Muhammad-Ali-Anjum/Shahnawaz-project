// import { useState } from "react";

// function NameForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name);
  
    
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border rounded mb-4"
//         />
//         <button className="w-full bg-blue-600 text-white py-2 rounded">
//           Submit
//         </button>
//       </form>
//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default NameForm;


// import { useState } from "react";

// function NameForm() {
//   const [name, setName] = useState("");
//   const [submittedName, setSubmittedName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedName(name);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow w-80"
//       >
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>

//       {submittedName && (
//         <h1 className="text-xl font-semibold text-gray-800">
//           Your Name: <span className="text-blue-600">{submittedName}</span>
//         </h1>
//       )}
//     </div>
//   );
// }

// export default NameForm;

import { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name cannot be empty!");
      return;
    }

    setSubmittedName(name);
    setError("");
    setName(""); // Clear input after submit
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 gap-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow w-80"
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-600 rounded mb-2 bg-gray-700 text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submittedName && (
        <h1 className="text-xl font-semibold">
          Your Name: <span className="text-blue-400">{submittedName}</span>
        </h1>
      )}
    </div>
  );
}

export default Forms;
