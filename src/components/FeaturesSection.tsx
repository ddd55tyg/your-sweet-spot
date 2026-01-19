import { motion } from "framer-motion";
import { BookOpen, TrendingUp, GraduationCap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "مكتبة الكتب",
    description: "التراكم التدريجي للمعلومات حول السلوك الذري والصغير يساعدك على فهم العالم بشكل أفضل.",
  },
  {
    icon: TrendingUp,
    title: "تحليل السوق",
    description: "التراكم التدريجي للمعلومات حول السلوك الذري والصغير يساعدك على فهم السوق بشكل أفضل.",
  },
  {
    icon: GraduationCap,
    title: "+50 دورة تدريبية",
    description: "التراكم التدريجي للمعلومات حول السلوك الذري والصغير يساعدك على التعلم بشكل أفضل.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">ميزاتنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            إمكانية الوصول للتعليم عبر الإنترنت
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
