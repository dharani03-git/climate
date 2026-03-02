import { motion } from "framer-motion";
import { Shield, BarChart3, PieChart, Landmark, RefreshCw, AlertTriangle } from "lucide-react";

const offerings = [
    {
        title: "Climate Strategy & Net-Zero Roadmapping",
        description: "We co-design ambitious, science-aligned net-zero strategies that are practical, financeable, and integrated into your core business planning. Our roadmaps cover near-term emission reduction actions through to long-horizon transformation milestones.",
        icon: Shield,
    },
    {
        title: "Carbon Measurement, Reporting & Verification (MRV)",
        description: "Establish rigorous Scope 1, 2, and 3 emissions inventories aligned with the GHG Protocol. We support CDP, TCFD, CSRD, and GRI disclosures — ensuring your data is defensible, investor-ready, and built to withstand third-party verification.",
        icon: BarChart3,
    },
    {
        title: "ESG Governance & Disclosure Advisory",
        description: "We help boards and leadership teams embed ESG into governance structures, set meaningful performance targets, navigate mandatory disclosure requirements, and communicate sustainability progress with credibility to investors, regulators, and the public.",
        icon: PieChart,
    },
    {
        title: "Green Finance & Sustainable Investment Access",
        description: "Access sustainability-linked loans, green bonds, and climate funds. We develop green finance frameworks, identify eligible instruments, prepare green financing proposals, and support you through the lender and investor due diligence process.",
        icon: Landmark,
    },
    {
        title: "Just Transition & Business Transformation",
        description: "Navigate the transition from high-carbon activities with a structured transformation plan. We support workforce transitions, asset repurposing, product portfolio evolution, and the identification of new, sustainable business models that unlock long-term value.",
        icon: RefreshCw,
    },
    {
        title: "Physical & Transition Climate Risk Assessment",
        description: "We conduct TCFD-aligned scenario analysis, model physical climate hazards to your assets and operations, and assess transition risks from changing regulations and market dynamics — helping you build resilience into every strategic and investment decision.",
        icon: AlertTriangle,
    },
];

const OfferingsSection = () => {
    return (
        <section id="offerings" className="section-padding bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive Climate Services — <span className="text-primary text-gradient-primary">From Strategy to Impact</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        From foundational carbon measurement to full-scale net-zero transformation,
                        our offerings are tailored to your industry, your ambition, and your operating reality.
                        We combine scientific rigour with commercial pragmatism to deliver climate solutions that actually work.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={offering.title}
                            className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform" />

                            <div className="mb-6 relative">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <offering.icon className="w-6 h-6 text-primary" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {offering.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {offering.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;
