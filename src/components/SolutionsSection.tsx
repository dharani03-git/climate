import { motion } from "framer-motion";
import { Monitor, Brain, FileText, Link, DollarSign } from "lucide-react";

const solutions = [
    {
        title: "ClimateOS™",
        subtitle: "Integrated Management Platform",
        description:
            "ClimateOS™ is our end-to-end digital platform for managing your entire climate programme in one place. Connect your data sources, track Scope 1, 2, and 3 emissions in real time, run scenario models, manage disclosure workflows, and engage your supply chain — all within a single, audit-ready environment. Built for sustainability teams that need both rigour and agility.",
        icon: Monitor,
        badge: "Flagship Platform",
    },
    {
        title: "Carbon Intelligence Suite",
        subtitle: "AI-Powered Analytics",
        description:
            "AI-powered analytics that transform your emissions data into strategic insight. Identify reduction opportunities, model the cost of inaction, benchmark against peers, and generate board-ready performance reports automatically. Designed for sustainability, finance, and operations teams who need answers — not more data.",
        icon: Brain,
        badge: "Analytics",
    },
    {
        title: "Sustainability Reporting Accelerator",
        subtitle: "Multi-Framework Reporting",
        description:
            "Streamline mandatory and voluntary sustainability reporting across multiple frameworks. Our accelerator integrates GRI, CDP, TCFD, CSRD, and SASB into a single guided workflow — cutting reporting time by up to 60%, improving data accuracy, and generating assurance-ready outputs that satisfy even the most rigorous external reviewers.",
        icon: FileText,
        badge: "Reporting",
    },
    {
        title: "Supply Chain Decarbonisation Programme",
        subtitle: "Scope 3 Engagement",
        description:
            "A structured programme to engage, educate, and activate your supplier network on climate action. We help suppliers measure their footprint, set science-based targets, and implement verified reduction initiatives — delivering measurable Scope 3 emission reductions while strengthening long-term supply chain resilience.",
        icon: Link,
        badge: "Programme",
    },
    {
        title: "Green Finance Readiness Programme",
        subtitle: "Sustainable Finance Access",
        description:
            "Prepare your organisation to unlock sustainability-linked finance. We develop green finance frameworks, identify eligible lending instruments and grant opportunities, build the data infrastructure required by lenders and investors, and support you from framework development through independent assurance.",
        icon: DollarSign,
        badge: "Finance",
    },
];

const SolutionsSection = () => {
    return (
        <section id="solutions" className="section-padding bg-secondary/20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-tl-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 text-xs text-primary font-medium uppercase tracking-widest"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Platforms & Programmes
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Purpose-Built Sustainability{" "}
                        <span className="text-gradient-primary">Platforms and Programmes</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Beyond advisory services, we deliver proprietary platforms and structured programmes that
                        operationalise climate action at scale — turning strategy into measurable, auditable progress.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className={`group relative p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 overflow-hidden ${index === 0 ? "lg:col-span-2" : ""
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <solution.icon className="w-7 h-7 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                            {solution.title}
                                        </h3>
                                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {solution.badge}
                                        </span>
                                    </div>
                                    <p className="text-sm text-primary/70 font-medium mb-3 uppercase tracking-wider">
                                        {solution.subtitle}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
