import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const values = [
    {
        title: "Science First",
        description:
            "Every recommendation we make is rooted in the latest climate research and IPCC-aligned decarbonisation pathways. We never oversimplify the science to make it more commercially comfortable.",
    },
    {
        title: "Commercial Rigour",
        description:
            "We design sustainability strategies to create measurable business value — because climate action that ignores financial reality will never reach the scale the world needs.",
    },
    {
        title: "Radical Transparency",
        description:
            "We say what is true, not what is comfortable. We call out greenwashing — including our own — and are open about uncertainties, trade-offs, and limitations in everything we do.",
    },
    {
        title: "Lasting Impact",
        description:
            "We measure our success not by the volume of reports we deliver, but by tonnes of carbon reduced, funds mobilised, and sustainable value created for our clients and the communities they operate in.",
    },
];


const AboutSection = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-l-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 text-xs text-primary font-medium uppercase tracking-widest">
                            About Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            We Are{" "}
                            <span className="text-gradient-primary">Nexus Climate Craft</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="space-y-5 text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p>
                            Nexus Climate Craft was founded by climate scientists and business strategists who believed
                            something radical: that sustainability and commercial success are not just compatible —
                            they are inseparable. Frustrated by the gap between climate ambition and climate action in
                            the corporate world, our founders set out to build a firm that bridged science, strategy,
                            and execution in a way that had never been done before.
                        </p>
                        <p>
                            Since our founding, we have worked with over 200 organisations across 30 countries, helping
                            them navigate the most complex and consequential challenge of our era. We don't believe in
                            tick-box sustainability. We believe in deep, transformative, science-led change that unlocks
                            real business value — and we hold ourselves to the same standard we set for every client.
                        </p>
                        <p>
                            Today, our team of 80+ specialists — spanning climate science, corporate finance, policy,
                            engineering, data analytics, and communications — brings unparalleled depth and breadth to
                            every engagement. We are proudly mission-driven, independently owned, and accountable to a
                            single measure of success: real-world emissions reduced.
                        </p>
                    </motion.div>
                </div>

                {/* Mission */}
                <motion.div
                    className="p-10 rounded-2xl border border-primary/30 bg-primary/5 mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Our Mission</p>
                    <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed">
                        "To accelerate the transition to a net-zero economy by equipping organisations with the
                        strategy, capability, and tools to turn climate ambition into verified, lasting impact."
                    </p>
                </motion.div>

                {/* Values */}
                <div className="mb-20">
                    <motion.h3
                        className="text-3xl font-bold mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Core Values
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="group p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                                        {value.title}
                                    </h4>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Founder Quote */}
                <motion.div
                    className="relative p-10 rounded-2xl bg-surface-elevated border border-border/50 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/20" />
                    <blockquote className="pl-6 text-xl md:text-2xl font-semibold leading-relaxed mb-6">
                        "The question is no longer whether businesses need to act on climate — it's how fast and how
                        ambitiously. We exist to make that answer possible for every organisation we work with."
                    </blockquote>
                    <p className="pl-6 text-muted-foreground font-medium">
                        — Dr. Maya Patel, Founder & CEO, Nexus Climate Craft
                    </p>
                </motion.div>


            </div>
        </section>
    );
};

export default AboutSection;
