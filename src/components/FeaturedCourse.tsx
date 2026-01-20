import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseDesign from "@/assets/course-design.jpg";

const FeaturedCourse = () => {
  const features = [
    "50+ Hours of HD Video Content",
    "Lifetime Access & Updates",
    "Certificate of Completion",
    "Hands-on Projects & Exercises",
    "Private Community Access",
    "1-on-1 Mentorship Sessions",
  ];

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              🔥 Featured Course
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Complete Web Development
              <span className="text-primary"> Bootcamp 2024</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Become a full-stack web developer with just one course. HTML, CSS, JavaScript, Node, React, MongoDB, Web3 and more!
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="xl">
                Enroll Now - $49.99
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground line-through">$199.99</span>
                <span className="text-accent font-bold">75% OFF</span>
              </div>
            </div>
          </motion.div>
          
          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={courseDesign} 
                alt="Featured Course" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-accent/50">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>
            
            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="text-2xl font-heading font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Students Enrolled</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="text-2xl font-heading font-bold text-accent">4.9 ⭐</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
