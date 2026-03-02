import { motion } from "framer-motion";
import { Database, Target, Gavel, RefreshCw, MessageSquare, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Climate Data & Advanced Analytics",
    description:
      "We harness best-in-class climate datasets, AI-powered modelling, and our proprietary analytics platform to transform complex emissions data into clear, actionable insight. From emissions forecasting and scenario modelling to real-time performance dashboards, we put the power of data at the heart of your climate strategy.",
    icon: Database,
  },
  {
    title: "Science-Based Targets (SBTi)",
    description:
      "We guide organisations through every step of the SBTi process — from ambition-setting and target design to formal submission, validation approval, and ongoing progress tracking. We ensure targets are credible, ambitious, and aligned with the latest 1.5°C climate science and sector-specific decarbonisation pathways.",
    icon: Target,
  },
  {
    title: "Climate Policy & Regulatory Navigation",
    description:
      "Our policy specialists monitor and interpret global, regional, and sector-specific climate regulations — including CSRD, SEC climate rules, EU taxonomy, carbon pricing schemes, and supply chain due diligence laws. We help you stay ahead of compliance obligations while actively shaping favourable policy outcomes.",
    icon: Gavel,
  },
  {
    title: "Life Cycle Assessment (LCA)",
    description:
      "We conduct rigorous, ISO 14040/14044-compliant life cycle assessments to quantify the full environmental impact of your products, services, and operations — from cradle to grave. LCA insights inform smarter product design, procurement decisions, and substantiated customer-facing sustainability claims.",
    icon: RefreshCw,
  },
  {
    title: "Stakeholder Engagement & Communications",
    description:
      "Effective climate action demands buy-in from across the value chain. We design and deliver stakeholder engagement programmes — from investor ESG briefings and supplier climate activation campaigns, to employee engagement programmes, community consultations, and polished sustainability reporting.",
    icon: MessageSquare,
  },
  {
    title: "Clean Technology & Innovation",
    description:
      "We help organisations identify, evaluate, and deploy emerging clean technologies — from renewable energy integration and green hydrogen, to carbon capture, sustainable buildings, and circular economy innovation. Our team spans engineers, modellers, and commercialisation specialists to take innovation from concept to deployment.",
    icon: Zap,
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Deep Capabilities Across the <br />
              <span className="text-gradient-primary">Entire Climate Spectrum</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our multidisciplinary team brings together climate scientists, policy specialists, financial
              analysts, engineers, and communications experts. This breadth of expertise allows us to
              tackle every dimension of your climate challenge — from data and disclosure to technology
              and transformation.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="group p-8 rounded-2xl bg-surface-elevated glow-border hover:bg-accent/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-8 relative w-12 h-12">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
