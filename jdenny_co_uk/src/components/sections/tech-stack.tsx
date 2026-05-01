import { techStackData } from '@/data/tech-stack';

export default function TechStack() {
  return (
    <aside className="bg-slate-grey p-8 lg:p-12">
      <h3 className="text-xl font-bold text-charcoal mb-6">Tech Stack</h3>
      <div className="grid grid-cols-3 gap-3">
        {techStackData.slice(0, 6).map((tech) => (
          <div
            key={tech.name}
            className="bg-white p-3 rounded-lg text-center text-sm font-medium text-charcoal hover:scale-105 transition-transform"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </aside>
  );
}
