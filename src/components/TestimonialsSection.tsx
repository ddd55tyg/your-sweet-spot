import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";

const testimonials = [
  {
    image: person1,
    name: "Sandy Rezk",
    role: "Software Engineer",
    content: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it!",
  },
  {
    image: person2,
    name: "Omar Mohamed",
    role: "Developer",
    content: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it!",
  },
  {
    image: person3,
    name: "Ahmad Tarek",
    role: "Designer",
    content: "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Each and Every Client is Important
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what our students are saying in the Reviews section! Real feedback from learners who have experienced and benefited from our courses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
