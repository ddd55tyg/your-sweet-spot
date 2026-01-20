import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedCourse from "@/components/FeaturedCourse";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <StatsSection />
        <FeaturesSection />
        <FeaturedCourse />
        <CoursesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
