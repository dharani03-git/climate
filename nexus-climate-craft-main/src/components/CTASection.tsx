import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const engagements = [
  "Institutional Advisory Briefing",
  "Renewable Project Assessment",
  "Climate Finance Structuring",
  "Carbon Monetization Strategy",
];

const CTASection = () => {
  return (
    <section id="engage" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Engage</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Ready to make your climate infrastructure bankable and intelligent?
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {engagements.map((e, i) => (
            <motion.button
              key={e}
              className="flex items-center justify-between px-6 py-4 rounded-xl border border-border bg-surface-elevated hover:border-primary/40 hover:bg-primary/5 transition-all group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="font-medium text-foreground">{e}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
