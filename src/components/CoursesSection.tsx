import { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import CategoryFilter from "./CategoryFilter";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import courseDesign from "@/assets/course-design.jpg";
import courseDev from "@/assets/course-dev.jpg";
import courseWeb from "@/assets/course-web.jpg";

const allCourses = [
  {
    id: 1,
    image: courseDesign,
    category: "design",
    categoryLabel: "Graphic Design",
    rating: 4.7,
    title: "UI & UX Design Masterclass",
    description: "Unlock your creativity with our comprehensive UI & UX course! Learn essential design principles and master industry-leading tools like Figma and Adobe XD.",
    sales: 80,
    originalPrice: 11.99,
    price: 4.99,
    duration: "22hr 30min",
    lessons: 64,
    instructor: "Sarah Miller",
    level: "Beginner",
    students: 2340,
  },
  {
    id: 2,
    image: courseDev,
    category: "development",
    categoryLabel: "Software Development",
    rating: 4.6,
    title: "Project Design & Management",
    description: "Transform ideas into actionable plans with our Project Design course. Learn to structure, organize, and execute projects effectively using Agile and Scrum.",
    sales: 160,
    originalPrice: 15.99,
    price: 7.99,
    duration: "30hr 30min",
    lessons: 121,
    instructor: "Mike Johnson",
    level: "Intermediate",
    students: 4521,
  },
  {
    id: 3,
    image: courseWeb,
    category: "development",
    categoryLabel: "Web Development",
    rating: 4.9,
    title: "Complete HTML & CSS Course",
    description: "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch with hands-on projects.",
    sales: 288,
    originalPrice: 18.99,
    price: 8.99,
    duration: "16hr 40min",
    lessons: 107,
    instructor: "Emily Chen",
    level: "Beginner",
    students: 6789,
  },
  {
    id: 4,
    image: courseDesign,
    category: "design",
    categoryLabel: "Graphic Design",
    rating: 4.8,
    title: "Adobe Photoshop Mastery",
    description: "Master Adobe Photoshop from beginner to advanced level. Learn photo editing, compositing, and digital art creation techniques.",
    sales: 450,
    originalPrice: 24.99,
    price: 12.99,
    duration: "28hr 15min",
    lessons: 89,
    instructor: "David Park",
    level: "Intermediate",
    students: 3456,
  },
  {
    id: 5,
    image: courseDev,
    category: "business",
    categoryLabel: "Business",
    rating: 4.5,
    title: "Digital Marketing Strategy",
    description: "Learn modern digital marketing strategies including SEO, social media marketing, email campaigns, and analytics to grow any business.",
    sales: 320,
    originalPrice: 29.99,
    price: 14.99,
    duration: "18hr 45min",
    lessons: 76,
    instructor: "Lisa Wang",
    level: "Beginner",
    students: 5678,
  },
  {
    id: 6,
    image: courseWeb,
    category: "marketing",
    categoryLabel: "Marketing",
    rating: 4.7,
    title: "Social Media Mastery",
    description: "Become a social media expert. Learn to create viral content, grow followers organically, and monetize your social media presence.",
    sales: 210,
    originalPrice: 19.99,
    price: 9.99,
    duration: "12hr 20min",
    lessons: 54,
    instructor: "Alex Brown",
    level: "Advanced",
    students: 4123,
  },
];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredCourses = activeCategory === "all" 
    ? allCourses 
    : allCourses.filter(course => course.category === activeCategory);

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 3);

  return (
    <section id="courses" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Our Courses</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Browse Our Best Selling Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of courses designed to help you develop your skills and achieve your professional goals.
          </p>
        </motion.div>

        <CategoryFilter onFilter={setActiveCategory} activeCategory={activeCategory} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              {...course} 
              category={course.categoryLabel}
              index={index} 
            />
          ))}
        </div>

        {filteredCourses.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? "Show Less" : "View All Courses"}
              <ArrowRight className={`w-5 h-5 transition-transform ${showAll ? "rotate-90" : ""}`} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
