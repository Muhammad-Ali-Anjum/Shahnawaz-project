import FeatureCard from "./FeatureCard";
import { featureData } from "../data/featureData";

export default function FeatureSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Build products users love
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            A modern React + Tailwind workflow designed for performance,
            scalability, and beautiful UI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
