import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Active Students" },
  { icon: BookOpen, value: 150, suffix: "+", label: "Online Courses" },
  { icon: Award, value: 98, suffix: "%", label: "Success Rate" },
  { icon: Globe, value: 50, suffix: "+", label: "Countries" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-primary-foreground/80 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
