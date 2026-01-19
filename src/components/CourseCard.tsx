import { motion } from "framer-motion";
import { Star, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  image: string;
  category: string;
  rating: number;
  title: string;
  description: string;
  sales: number;
  originalPrice: number;
  price: number;
  duration: string;
  lessons: number;
  index: number;
}

const CourseCard = ({
  image,
  category,
  rating,
  title,
  description,
  sales,
  originalPrice,
  price,
  duration,
  lessons,
  index,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
        <div className="absolute top-4 right-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span>{sales} مبيعات</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-heading font-bold text-success">
            ${price}
          </span>
          <span className="text-muted-foreground line-through text-sm">
            ${originalPrice}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} درس</span>
          </div>
        </div>

        <Button variant="hero" className="w-full mt-4">
          اعرف المزيد
        </Button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
