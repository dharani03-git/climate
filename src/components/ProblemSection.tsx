import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Weak technical validation",
  "Unclear grid & regulatory pathways",
  "Poor financial structuring",
  "ESG treated as compliance, not value",
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Why the Energy Transition Is{" "}
            <span className="text-gradient-primary">Hard</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            The shift to clean energy isn't just about technology. It's about capital, risk, and execution.
            Most projects fail because of:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem}
              className="flex items-start gap-4 p-6 rounded-xl bg-surface-elevated border border-border glow-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground font-medium">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl font-display font-semibold mt-12 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          That's where <span className="text-primary">TRUSTGRID</span> comes in.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
