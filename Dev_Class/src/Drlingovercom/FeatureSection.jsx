import { useFeatures } from "../context/FeatureContext";
import FeatureCard from "./FeatureCard";
import Header from '../componentprops drling/Header'


export default function FeatureSection() {
  const { features } = useFeatures();

  return (
  <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
   <Header/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
    </section>
  );
}
