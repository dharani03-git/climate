import { motion } from "framer-motion";
import { Zap, Factory, TrendingUp, Building2, Leaf, Cpu, Truck, Heart } from "lucide-react";

const industries = [
    {
        title: "Energy & Utilities",
        description:
            "Accelerate the energy transition with strategic portfolio decarbonisation, renewables integration planning, grid flexibility solutions, and expert navigation of an evolving regulatory landscape. We help energy companies transform from within — building the commercial case for clean energy at every step.",
        icon: Zap,
    },
    {
        title: "Manufacturing",
        description:
            "Tackle hard-to-abate industrial emissions with process electrification, green hydrogen feasibility studies, circular economy strategies, and supply chain decarbonisation programmes. We combine deep engineering knowledge with climate finance expertise to make industrial transformation commercially viable.",
        icon: Factory,
    },
    {
        title: "Financial Services",
        description:
            "Align your lending and investment portfolio with Paris Agreement goals, quantify and manage climate-related financial risk under TCFD, and lead on sustainable finance product innovation. We serve banks, insurers, asset managers, and development finance institutions worldwide.",
        icon: TrendingUp,
    },
    {
        title: "Real Estate & Construction",
        description:
            "Drive net-zero buildings through whole-lifecycle carbon assessment, cost-optimised retrofit roadmaps, green building certification support, and climate-resilient design advisory. We help developers, REITs, and asset managers turn regulatory compliance into a market advantage.",
        icon: Building2,
    },
    {
        title: "Agriculture & Food Systems",
        description:
            "Transform land use practices, measure and reduce agricultural emissions, build regenerative farming programmes, and develop credible nature-based carbon projects. We help food and agri businesses respond to consumer demands, retailer requirements, and evolving policy with confidence.",
        icon: Leaf,
    },
    {
        title: "Technology",
        description:
            "Go beyond carbon neutrality marketing claims — achieve verified net-zero through credible scope-3 measurement, substantiated reduction initiatives, and high-quality carbon removal. We help tech companies lead the way with transparent, science-aligned sustainability programmes that attract talent and investor trust.",
        icon: Cpu,
    },
    {
        title: "Transport & Logistics",
        description:
            "Decarbonise fleets through EV transition planning, low-carbon fuel feasibility, route optimisation, and modal shift analysis. We also help logistics operators build climate-resilient supply chains and prepare for incoming carbon pricing regulations that will reshape sector economics.",
        icon: Truck,
    },
    {
        title: "Healthcare",
        description:
            "Support healthcare systems and life sciences companies in reducing their significant environmental footprint — covering facilities, procurement, supply chain, and clinical operations — without compromising service quality or patient outcomes. We understand the unique governance, regulatory, and operational constraints of healthcare organisations.",
        icon: Heart,
    },
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/4 blur-[100px] rounded-br-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 text-xs text-primary font-medium uppercase tracking-widest"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Industries
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Serving Every Industry on the{" "}
                        <span className="text-gradient-primary">Path to Net Zero</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        No two industries face the same climate challenges. Our sector-specific expertise means we
                        move fast, speak your language, and deliver solutions that are grounded in your commercial
                        reality — not generic sustainability frameworks.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                <industry.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                                {industry.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
