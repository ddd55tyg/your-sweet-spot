import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Courses" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "business", label: "Business" },
  { id: "marketing", label: "Marketing" },
];

interface CategoryFilterProps {
  onFilter: (category: string) => void;
  activeCategory: string;
}

const CategoryFilter = ({ onFilter, activeCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilter(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
