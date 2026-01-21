import { Rocket, Code2, Palette } from "lucide-react";

export default function FeatureSections() {
  const cards = [
    {
      title: "Fast Development",
      text: "Ship high-performance products faster with modern React architecture.",
      icon: Rocket,
      // gradient: "from-blue-500/80 to-cyan-500/80",
      image: "data:image/jpeg;base64,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",
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
          {/* cards.map((card, i) =>{
            return();
          )}; */}
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
              >
               
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform "
                />

                
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />

                
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

               
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  
                 
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>

               
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/85 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                 
                  <div className="mt-8 flex gap-18">
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
