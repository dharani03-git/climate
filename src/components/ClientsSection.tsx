import { motion } from "framer-motion";

const clients = [
  "Infrastructure Funds",
  "Renewable Developers",
  "Utilities & Traders",
  "AI & Data Centers",
  "Mobility Platforms",
  "Government & Multilaterals",
];

const ClientsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Who We <span className="text-gradient-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            From institutional capital to sovereign infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              className="px-6 py-3 rounded-full border border-border bg-surface-elevated text-foreground font-medium text-sm hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
