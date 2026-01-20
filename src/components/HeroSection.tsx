import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/70" />
      
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
            Join Us Now
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Best Learning
            <span className="block text-accent">Opportunities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We know how large objects will act, but things on a small scale just don't act that way. Discover the world of learning with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Quote Now
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl hidden md:block"
      />
    </section>
  );
};

export default HeroSection;
