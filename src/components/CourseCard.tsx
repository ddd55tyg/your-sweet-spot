import { motion } from "framer-motion";
import { Star, Clock, BookOpen, Users, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  instructor?: string;
  level?: string;
  students?: number;
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
  instructor = "John Doe",
  level = "Beginner",
  students = 1200,
}: CourseCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

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
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="hero" size="lg" className="gap-2">
            <Play className="w-5 h-5" />
            Preview
          </Button>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
          {discount > 0 && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
              -{discount}% OFF
            </span>
          )}
        </div>
        
        {/* Rating & Like */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            {rating}
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? "bg-accent text-accent-foreground" : "bg-card/90 text-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Level badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            level === "Beginner" ? "bg-green-500 text-white" :
            level === "Intermediate" ? "bg-yellow-500 text-black" :
            "bg-red-500 text-white"
          }`}>
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Instructor */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">{instructor.charAt(0)}</span>
          </div>
          <span className="text-sm text-muted-foreground">By {instructor}</span>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} Lessons</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-accent">
              ${price}
            </span>
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice}
            </span>
          </div>
          <Button variant="hero" size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
