import FeatureCard from "./FeatureCard";
import { featureData } from "../data/featureData";
import Header from "./Header";

export default function FeatureSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
       <Header/>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((elm, index) => (
            <FeatureCard key={index} {...elm} />
          ))}
        </div>

      </div>
    </section>
  );
}
