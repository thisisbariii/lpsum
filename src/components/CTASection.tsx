import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: '.cta-content',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center cta-content">
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
          Ready to Experience True Luxury?
        </h2>
        <p className="text-xl text-gray-300 mb-12 font-light">
          Visit our showroom and discover how Maison Luxe can transform your space
        </p>
        <button
          onClick={scrollToContact}
          className="px-12 py-5 bg-amber-600 text-white text-sm uppercase tracking-widest hover:bg-amber-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block"
        >
          Book Your Visit
        </button>
      </div>
    </section>
  );
}
