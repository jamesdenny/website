import { profileData } from '@/data/profile';

export default function Hero() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 lg:grid-cols-24 gap-8 lg:gap-12">
        <div className="md:col-span-4 lg:col-span-8">
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Headshot
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-16 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
            Hello
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-6">
            {profileData.headline}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {profileData.summary}
          </p>
          <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
