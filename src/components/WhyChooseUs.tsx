import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, Headphones, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lifetime Access",
    description: "Get unlimited access to course materials forever, including all future updates.",
  },
  {
    icon: Shield,
    title: "Certificate of Completion",
    description: "Earn a verified certificate that you can share with employers and on LinkedIn.",
  },
  {
    icon: Clock,
    title: "Learn at Your Own Pace",
    description: "Study whenever and wherever you want with our flexible learning platform.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help from our expert support team and community whenever you need it.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Money Back",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
  },
  {
    icon: Check,
    title: "Real Projects",
    description: "Build real-world projects to add to your portfolio and impress employers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Benefits of Learning With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive learning platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
