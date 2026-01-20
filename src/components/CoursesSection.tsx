import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import courseDesign from "@/assets/course-design.jpg";
import courseDev from "@/assets/course-dev.jpg";
import courseWeb from "@/assets/course-web.jpg";

const courses = [
  {
    image: courseDesign,
    category: "Graphic Design",
    rating: 4.7,
    title: "UI & UX Design",
    description: "Unlock your creativity with our UI & UX course! Learn essential design principles and master industry-leading tools.",
    sales: 80,
    originalPrice: 11.99,
    price: 4.99,
    duration: "22hr 30min",
    lessons: 64,
  },
  {
    image: courseDev,
    category: "Software Development",
    rating: 4.6,
    title: "Project Design",
    description: "Transform ideas into actionable plans with our Project Design course. Learn to structure, organize, and execute projects effectively.",
    sales: 160,
    originalPrice: 15.99,
    price: 7.99,
    duration: "30hr 30min",
    lessons: 121,
  },
  {
    image: courseWeb,
    category: "Web Development",
    rating: 4.9,
    title: "HTML & CSS",
    description: "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch.",
    sales: 288,
    originalPrice: 18.99,
    price: 8.99,
    duration: "16hr 40min",
    lessons: 107,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Courses</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Browse Our Best Selling Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of courses designed to help you develop your skills and achieve your professional goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
