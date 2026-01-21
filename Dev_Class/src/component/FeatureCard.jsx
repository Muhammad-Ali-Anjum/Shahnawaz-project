
export default function FeatureCard({ title, text, icon: Icon, image, gradient }) {
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
          <h3 className="text-2xl font-semibold mb-3">
            {title}
          </h3>
          <p className="text-white/85 leading-relaxed">
            {text}
          </p>
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
