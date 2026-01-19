import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";

const testimonials = [
  {
    image: person1,
    name: "ساندي رزق",
    role: "مهندسة برمجيات",
    content: "هذه الدورة فاقت توقعاتي! كان المحتوى منظمًا بشكل جيد، والشرح واضح، والمشاريع العملية ساعدتني في بناء مهارات حقيقية. أوصي بها بشدة!",
  },
  {
    image: person2,
    name: "عمر محمد",
    role: "مطور",
    content: "هذه الدورة فاقت توقعاتي! كان المحتوى منظمًا بشكل جيد، والشرح واضح، والمشاريع العملية ساعدتني في بناء مهارات حقيقية. أوصي بها بشدة!",
  },
  {
    image: person3,
    name: "أحمد طارق",
    role: "مصمم",
    content: "هذه الدورة فاقت توقعاتي! كان المحتوى منظمًا بشكل جيد، والشرح واضح، والمشاريع العملية ساعدتني في بناء مهارات حقيقية. أوصي بها بشدة!",
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
          <span className="text-primary font-medium mb-4 block">آراء العملاء</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            كل عميل مهم بالنسبة لنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف ما يقوله طلابنا في قسم المراجعات! ملاحظات حقيقية من المتعلمين الذين جربوا واستفادوا من دوراتنا.
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
