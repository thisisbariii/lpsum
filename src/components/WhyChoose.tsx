import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Hammer, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: 'Timeless Design',
    description: 'Each piece is crafted to transcend fleeting trends, ensuring elegance for generations.',
  },
  {
    icon: Hammer,
    title: 'Handcrafted Luxury',
    description: 'Our master artisans bring decades of expertise to every detail, from concept to completion.',
  },
  {
    icon: Heart,
    title: 'Personalized Experience',
    description: 'Your vision becomes reality with our bespoke design consultations and tailored solutions.',
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.why-title',
          start: 'top 85%',
        },
      });

      gsap.from('.feature-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="why-title text-5xl md:text-6xl font-serif text-center mb-16">
          Why Choose Maison Luxe
        </h2>

        <div className="features-grid grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-amber-600/20 rounded-full">
                    <Icon className="w-10 h-10 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
