import { motion } from "framer-motion";
import { Shield, BarChart3, PieChart, Landmark, RefreshCw, AlertTriangle, ArrowUpRight } from "lucide-react";

const offerings = [
    {
        title: "Climate Strategy & Net-Zero Roadmapping",
        description:
            "We co-design ambitious, science-aligned net-zero strategies that are practical, financeable, and integrated into your core business planning. Our roadmaps cover near-term emission reduction actions through to long-horizon transformation milestones.",
        icon: Shield,
        color: "from-emerald-500/10 to-emerald-500/5",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    },
    {
        title: "Carbon Measurement, Reporting & Verification (MRV)",
        description:
            "Establish rigorous Scope 1, 2, and 3 emissions inventories aligned with the GHG Protocol. We support CDP, TCFD, CSRD, and GRI disclosures — ensuring your data is defensible, investor-ready, and built to withstand third-party verification.",
        icon: BarChart3,
        color: "from-cyan-500/10 to-cyan-500/5",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    },
    {
        title: "ESG Governance & Disclosure Advisory",
        description:
            "We help boards and leadership teams embed ESG into governance structures, set meaningful performance targets, navigate mandatory disclosure requirements, and communicate sustainability progress with credibility to investors, regulators, and the public.",
        icon: PieChart,
        color: "from-violet-500/10 to-violet-500/5",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    },
    {
        title: "Green Finance & Sustainable Investment Access",
        description:
            "Access sustainability-linked loans, green bonds, and climate funds. We develop green finance frameworks, identify eligible instruments, prepare green financing proposals, and support you through the lender and investor due diligence process.",
        icon: Landmark,
        color: "from-amber-500/10 to-amber-500/5",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    },
    {
        title: "Just Transition & Business Transformation",
        description:
            "Navigate the transition from high-carbon activities with a structured transformation plan. We support workforce transitions, asset repurposing, product portfolio evolution, and the identification of new, sustainable business models that unlock long-term value.",
        icon: RefreshCw,
        color: "from-blue-500/10 to-blue-500/5",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    },
    {
        title: "Physical & Transition Climate Risk Assessment",
        description:
            "We conduct TCFD-aligned scenario analysis, model physical climate hazards to your assets and operations, and assess transition risks from changing regulations and market dynamics — helping you build resilience into every strategic and investment decision.",
        icon: AlertTriangle,
        color: "from-rose-500/10 to-rose-500/5",
        iconColor: "text-rose-400",
        iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    },
];

const containerVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const OfferingsSection = () => {
    return (
        <section id="offerings" className="section-padding relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute inset-0 bg-secondary/25 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        className="section-label mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Offerings
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                    >
                        Comprehensive Climate Services —{" "}
                        <span className="text-gradient-primary">From Strategy to Impact</span>
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

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {offerings.map((offering) => (
                        <motion.div
                            key={offering.title}
                            variants={cardVariant}
                            className={`group relative p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-400 overflow-hidden card-hover-lift cursor-default`}
                        >
                            {/* Card gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                            {/* Shimmer line on hover */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${offering.iconBg} flex items-center justify-center mb-6 transition-all duration-300`}>
                                    <offering.icon className={`w-6 h-6 ${offering.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`} />
                                </div>

                                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                                    {offering.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                                    {offering.description}
                                </p>

                                {/* Arrow link indicator */}
                                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary/60 group-hover:text-primary transition-all duration-300">
                                    <span>Learn more</span>
                                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA strip */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div>
                        <p className="text-lg font-bold mb-1">Not sure where to start?</p>
                        <p className="text-sm text-muted-foreground">Talk to our team — we'll identify the right starting point for your organisation.</p>
                    </div>
                    <a
                        href="#contact"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25"
                    >
                        Book a Discovery Call <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OfferingsSection;
