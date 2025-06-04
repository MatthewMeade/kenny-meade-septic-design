
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
