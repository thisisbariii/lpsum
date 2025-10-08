import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log('Hero component mounted');
    console.log('Refs:', { 
      title: titleRef.current, 
      subtitle: subtitleRef.current, 
      cta: ctaRef.current 
    });

    // Animate elements on mount
    const animateElement = (el: HTMLElement | null, delay: number, name: string) => {
      if (el) {
        console.log(`Animating ${name} with delay ${delay}ms`);
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0px)';
          console.log(`${name} animated`, el.style);
        }, delay);
      } else {
        console.error(`${name} ref is null!`);
      }
    };

    animateElement(titleRef.current, 300, 'title');
    animateElement(subtitleRef.current, 600, 'subtitle');
    animateElement(ctaRef.current, 900, 'button');

    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Contact section coming soon!');
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
        >
          Where Luxury Finds Its Home
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-2xl text-white text-opacity-90 mb-10 font-light tracking-wide opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          Experience bespoke interiors crafted for timeless elegance
        </p>
        <button
          onClick={scrollToContact}
          className="px-12 py-3 bg-transparent border-2 border-white text-white text-sm uppercase tracking-widest font-semibold rounded-lg hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
        >
          Book a Showroom Visit
        </button>
      </div>
    </section>
  );
}