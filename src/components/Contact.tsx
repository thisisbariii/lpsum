import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 85%',
        },
      });

      gsap.from('.contact-form', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-white relative"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="contact-title text-5xl md:text-6xl font-serif text-center text-gray-900 mb-4">
          Book Your Visit
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Step into the world of Maison Luxe. Let us bring your vision to life.
        </p>

        <form onSubmit={handleSubmit} className="contact-form space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-stone-50 border-0 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-stone-50 border-0 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-stone-50 border-0 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-6 py-4 bg-stone-50 border-0 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-gray-900 text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">
              {submitted ? 'Message Sent!' : 'Submit Request'}
            </span>
            <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </form>
      </div>

      
    </section>
  );
}
