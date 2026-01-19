import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  content: string;
  index: number;
}

const TestimonialCard = ({ image, name, role, content, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-warning fill-warning" />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h4 className="font-heading font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
