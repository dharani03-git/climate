import { motion } from "framer-motion";
import { Globe, Cpu, BookOpen, ArrowRight } from "lucide-react";


const partnerCategories = [
    {
        title: "Strategic Alliances",
        description:
            "We maintain strategic alliances with leading global management consultancies and sustainability networks that extend our geographic reach and enhance our ability to deliver outcomes at the scale our clients require. These partnerships enable seamless execution of complex, multi-geography engagements without compromising the specialist climate focus that defines our work.",
        icon: Globe,
    },
    {
        title: "Technology Partners",
        description:
            "Our technology partner ecosystem includes leading climate data providers, IoT emissions monitoring platforms, AI analytics companies, and enterprise sustainability software vendors. All partner technologies are integrated and validated within our ClimateOS™ platform — giving clients a curated, interoperable technology stack rather than a patchwork of disconnected tools.",
        icon: Cpu,
    },
    {
        title: "Research & Academic Partners",
        description:
            "We maintain formal research partnerships with universities, climate institutes, and IPCC-affiliated research centres. These relationships ensure our work is always grounded in the most current climate science, and give our clients access to cutting-edge research, pilot programmes, and thought leadership long before it enters mainstream practice.",
        icon: BookOpen,
    },
];

const PartnersSection = () => {
    return (
        <section id="partners" className="section-padding bg-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 text-xs text-primary font-medium uppercase tracking-widest"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Partners
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Powerful Partnerships for{" "}
                        <span className="text-gradient-primary">Greater Climate Impact</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        No single organisation can solve climate change alone. We collaborate with a carefully selected
                        global ecosystem of research institutions, technology companies, financial partners, and
                        sustainability networks — so our clients always benefit from the best thinking available.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {partnerCategories.map((partner, index) => (
                        <motion.div
                            key={partner.title}
                            className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                <partner.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {partner.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Become a Partner CTA */}
                <motion.div
                    className="relative p-10 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Become a Partner</h3>
                            <p className="text-muted-foreground max-w-xl">
                                We are always open to new partnerships that advance our shared mission to accelerate the
                                low-carbon transition. Whether you are a technology provider, specialist consultancy,
                                financial institution, or research organisation, we would love to explore how we might
                                create more impact together.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                        >
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
