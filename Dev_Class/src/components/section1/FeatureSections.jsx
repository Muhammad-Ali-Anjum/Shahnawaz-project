import { Rocket, Code2, Palette } from "lucide-react";

export default function FeatureSections() {
  const cards = [
    {
      title: "Fast Development",
      text: "Ship high-performance products faster with modern React architecture.",
      icon: Rocket,
      gradient: "from-blue-500/80 to-cyan-500/80",
      image: "/images/bg1.jpg",
    },
    {
      title: "Clean Architecture",
      text: "Write scalable, maintainable, and production-ready code effortlessly.",
      icon: Code2,
      gradient: "from-emerald-500/80 to-green-500/80",
      image: "/images/bg2.jpg",
    },
    {
      title: "Modern UI",
      text: "Craft elegant, responsive, and accessible interfaces using Tailwind CSS.",
      icon: Palette,
      gradient: "from-violet-500/80 to-purple-500/80",
      image: "/images/bg3.jpg",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Build products users love
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            A modern React + Tailwind workflow designed for performance,
            scalability, and beautiful UI.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                />

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
                      {card.title}
                    </h3>
                    <p className="text-white/85 leading-relaxed">
                      {card.text}
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
          })}
        </div>

      </div>
    </section>
  );
}
