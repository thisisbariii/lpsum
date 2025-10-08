import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <WhyChoose />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
       <WhatsAppButton />
    </div>
  );
}

export default App;
