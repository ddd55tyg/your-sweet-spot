import { motion } from "framer-motion";

const partners = [
  { name: "Google", logo: "G" },
  { name: "Microsoft", logo: "M" },
  { name: "Amazon", logo: "A" },
  { name: "Meta", logo: "F" },
  { name: "Apple", logo: "🍎" },
  { name: "Netflix", logo: "N" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8"
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
            >
              <span className="text-3xl md:text-4xl font-heading font-bold">
                {partner.logo}
              </span>
              <span className="text-lg md:text-xl font-heading font-semibold hidden sm:block">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
