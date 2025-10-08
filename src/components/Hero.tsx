import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      });
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out',
      });
    }, heroRef);

    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          Where Luxury Finds Its Home
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-10 font-light tracking-wide">
          Experience bespoke interiors crafted for timeless elegance
        </p>
        
      </div>
    </section>
  );
}
