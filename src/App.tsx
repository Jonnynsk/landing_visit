import Header from './components/Header';
import Hero from './components/Hero';
import PainsSection from './components/PainsSection';
import CasesSection from './components/CasesSection';
import Calculator from './components/Calculator';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="min-w-0 overflow-x-hidden">
        <Hero />
        <PainsSection />
        <CasesSection />
        <Calculator />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
