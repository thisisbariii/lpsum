import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-serif tracking-wider cursor-pointer transition-colors ${
            scrolled ? 'text-black' : 'text-white'
          }`}
          onClick={() => scrollToSection('hero')}
        >
          MAISON LUXE
        </div>
        <div className="flex gap-8">
          {['home', 'collection', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
              className={`text-sm uppercase tracking-widest transition-all hover:opacity-70 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
