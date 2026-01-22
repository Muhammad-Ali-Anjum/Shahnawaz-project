// export default function FeatureCard({ feature }) {
//   const { title, description, image, icon: Icon } = feature;

//   return (
//     <article className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
//       <img
//         src={image}
//         alt={title}
//         className="absolute inset-0 w-full h-full object-cover 
//                    group-hover:scale-105 transition duration-500"
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">

//         <div className="w-10 h-10 bg-white/15 backdrop-blur 
//                         rounded-xl flex items-center justify-center mb-3">
//           <Icon className="text-white w-5 h-5" />
//         </div>

//         <h3 className="text-xl font-semibold text-white">{title}</h3>
//         <p className="text-gray-200 text-sm mt-2">{description}</p>

//         <div className="flex gap-3 mt-4">
//           <button className="px-4 py-2 bg-white text-gray-900 
//                              rounded-lg text-sm font-medium">
//             Learn More
//           </button>
//           <button className="px-4 py-2 border border-white 
//                              text-white rounded-lg text-sm font-medium">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

export default function FeatureCard({ feature }) {
  const { title, description, image, icon: Icon, gradient = "from-purple-500/60 via-pink-500/40 to-red-500/30" } = feature;

  return (
    <div className="group relative rounded-3xl overflow-hidden">
      
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Glass Layer */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
          <Icon size={26} />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-white/85 leading-relaxed">{description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-5 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-semibold hover:bg-slate-200 transition">
            Get Started
          </button>
          <button className="px-5 py-2.5 border border-white/40 rounded-xl text-sm font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}
