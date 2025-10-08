import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: 'Maison Luxe transformed our home into a sanctuary of elegance. Every piece speaks to the soul and radiates timeless beauty.',
    author: 'Isabella Rousseau',
    role: 'Art Collector',
  },
  {
    id: 2,
    text: 'The craftsmanship is unparalleled. Working with Maison Luxe felt like collaborating with true artists who understood our vision perfectly.',
    author: 'Alexander Chen',
    role: 'Interior Designer',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.testimonial-title',
          start: 'top 85%',
        },
      });

      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-stone-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="testimonial-title text-5xl md:text-6xl font-serif text-center text-gray-900 mb-16">
          What Our Clients Say
        </h2>

        <div className="testimonials-grid grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white p-10 shadow-lg relative"
            >
              <Quote className="w-12 h-12 text-amber-600/30 mb-6" />
              <p className="text-xl font-serif text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
