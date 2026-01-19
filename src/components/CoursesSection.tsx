import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import courseDesign from "@/assets/course-design.jpg";
import courseDev from "@/assets/course-dev.jpg";
import courseWeb from "@/assets/course-web.jpg";

const courses = [
  {
    image: courseDesign,
    category: "تصميم جرافيك",
    rating: 4.7,
    title: "تصميم UI & UX",
    description: "أطلق العنان لإبداعك مع دورتنا في UI & UX! تعلم مبادئ التصميم الأساسية، وأتقن الأدوات الرائدة في الصناعة.",
    sales: 80,
    originalPrice: 11.99,
    price: 4.99,
    duration: "22 ساعة 30 دقيقة",
    lessons: 64,
  },
  {
    image: courseDev,
    category: "تطوير البرمجيات",
    rating: 4.6,
    title: "تصميم المشاريع",
    description: "حول الأفكار إلى خطط قابلة للتنفيذ مع دورتنا في تصميم المشاريع. تعلم كيفية الهيكلة والتنظيم والتنفيذ.",
    sales: 160,
    originalPrice: 15.99,
    price: 7.99,
    duration: "30 ساعة 30 دقيقة",
    lessons: 121,
  },
  {
    image: courseWeb,
    category: "تطوير الويب",
    rating: 4.9,
    title: "HTML & CSS",
    description: "ابنِ أساس تطوير الويب مع دورتنا في HTML & CSS! تعلم إنشاء مواقع ويب مذهلة وسريعة الاستجابة من الصفر.",
    sales: 288,
    originalPrice: 18.99,
    price: 8.99,
    duration: "16 ساعة 40 دقيقة",
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
          <span className="text-primary font-medium mb-4 block">دوراتنا التدريبية</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            تصفح دوراتنا الأكثر مبيعًا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من الدورات المصممة لمساعدتك على تطوير مهاراتك وتحقيق أهدافك المهنية.
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
