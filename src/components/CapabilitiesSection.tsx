import { motion } from "framer-motion";
import { Database, Target, Gavel, RefreshCw, MessageSquare, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Climate Data & Advanced Analytics",
    description:
      "We harness best-in-class climate datasets and AI-powered modelling to transform complex emissions data into clear, actionable insight. From emissions forecasting and scenario modelling to comprehensive transition risk assessments.",
    icon: Database,
    num: "01",
  },
  {
    title: "Science-Based Targets (SBTi)",
    description:
      "We guide organisations through every step of the SBTi process — from ambition-setting and target design to formal submission, validation approval, and ongoing progress tracking aligned with the latest 1.5°C science.",
    icon: Target,
    num: "02",
  },
  {
    title: "Climate Policy & Regulatory Navigation",
    description:
      "Our policy specialists monitor global, regional, and sector-specific regulations — including CSRD, SEC climate rules, EU taxonomy, and carbon pricing schemes. We help you stay ahead of compliance obligations.",
    icon: Gavel,
    num: "03",
  },
  {
    title: "Life Cycle Assessment (LCA)",
    description:
      "We conduct rigorous, ISO 14040/14044-compliant life cycle assessments to quantify the full environmental impact of your products, services, and operations — from cradle to grave. LCA insights inform smarter decisions.",
    icon: RefreshCw,
    num: "04",
  },
  {
    title: "Stakeholder Engagement & Communications",
    description:
      "Effective climate action demands buy-in from across the value chain. We design and deliver stakeholder engagement programmes — from investor ESG briefings to supplier activation campaigns and community consultations.",
    icon: MessageSquare,
    num: "05",
  },
  {
    title: "Clean Technology & Innovation",
    description:
      "We help organisations identify, evaluate, and deploy emerging clean technologies — from renewable energy and green hydrogen to carbon capture, sustainable buildings, and circular economy innovation.",
    icon: Zap,
    num: "06",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding overflow-hidden relative">
      {/* Background layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.6] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              className="section-label mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Capabilities
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Deep Capabilities Across the{" "}
              <br className="hidden md:block" />
              <span className="text-gradient-primary">Entire Climate Spectrum</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-base text-muted-foreground leading-relaxed max-w-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our multidisciplinary team brings together climate scientists, policy specialists,
            financial analysts, engineers, and communications experts to tackle every dimension
            of your climate challenge.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="group relative p-7 rounded-2xl bg-surface-elevated border border-border/50 hover:border-primary/40 transition-all duration-400 overflow-hidden cursor-default card-hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Top border shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div className="relative z-10">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-400">
                      <capability.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                    </div>
                  </div>
                  <span className="text-4xl font-bold font-display text-border/60 group-hover:text-primary/20 transition-colors duration-300 leading-none">
                    {capability.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: "Specialists", value: "80+" },
            { label: "Countries", value: "30+" },
            { label: "Certifications", value: "12" },
            { label: "Years of Experience", value: "15+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/70 px-8 py-6 text-center group hover:bg-primary/5 transition-colors">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
