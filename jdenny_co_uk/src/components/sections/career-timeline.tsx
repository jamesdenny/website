import { careerData } from '@/data/career';

export default function CareerTimeline() {
  return (
    <section className="p-8 lg:p-12 bg-white">
      <h3 className="text-2xl font-bold text-charcoal mb-8">Career Timeline</h3>
      <div className="space-y-6">
        {careerData.slice(0, 3).map((entry) => (
          <div
            key={entry.id}
            className="border-l-3 border-primary pl-6"
          >
            <h4 className="text-lg font-semibold text-charcoal mb-1">
              {entry.role}
            </h4>
            <div className="text-primary font-medium text-sm mb-2">
              {entry.company}
            </div>
            <div className="text-gray-400 text-sm mb-3">
              {entry.startDate} {entry.endDate && `- ${entry.endDate}`}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {entry.achievements[0]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
