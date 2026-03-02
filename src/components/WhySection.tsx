import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Engineering Depth", desc: "Deep technical validation across the energy value chain." },
  { title: "Investor Mindset", desc: "We think like capital allocators, not just consultants." },
  { title: "Digital Intelligence", desc: "AI-native analytics powering every decision." },
  { title: "Full Lifecycle Advisory", desc: "Feasibility → Financing → Optimization → Monetization." },
];

const WhySection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient-primary">TRUSTGRID</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-surface-elevated border border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
