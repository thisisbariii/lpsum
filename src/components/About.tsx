import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
        },
      });

      gsap.from('.about-text', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury interior"
              className="w-full h-[600px] object-cover shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="about-text text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Crafted for Those Who Seek Excellence
            </h2>
            <p className="about-text text-lg text-gray-600 leading-relaxed">
              For over three decades, Maison Luxe has been the epitome of refined
              living. Each piece in our collection tells a story of exceptional
              craftsmanship, where tradition meets contemporary elegance.
            </p>
            <p className="about-text text-lg text-gray-600 leading-relaxed">
              Our artisans pour passion into every detail, creating furniture
              that transcends trends and becomes part of your family's legacy.
              From hand-selected materials to meticulous finishing, we ensure
              that luxury is woven into every fiber.
            </p>
            <p className="about-text text-lg text-gray-600 leading-relaxed">
              Welcome to a world where your home becomes a masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
