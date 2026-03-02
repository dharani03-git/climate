import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Clock, Send } from "lucide-react";
import { useState } from "react";

const helpOptions = [
    "Climate Strategy & Net-Zero Roadmapping",
    "Carbon Measurement, Reporting & Verification",
    "ESG Governance & Disclosure",
    "Green Finance & Sustainable Investment",
    "Climate Risk Assessment",
    "Technology Platforms & Solutions",
    "Partnership Enquiry",
    "Other",
];

const contactDetails = [
    { icon: MapPin, label: "Headquarters", value: "25 Green Lane, London EC2A 3AE, United Kingdom" },
    { icon: Mail, label: "Email", value: "hello@nexusclimate.craft" },
    { icon: Phone, label: "Phone", value: "+44 20 7123 4567" },
    { icon: Globe, label: "Global Offices", value: "London · New York · Singapore · Nairobi · Sydney" },
    { icon: Clock, label: "Response Time", value: "We respond to all enquiries within 24 business hours" },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organisation: "",
        helpWith: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section-padding bg-secondary/20 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6 text-xs text-primary font-medium uppercase tracking-widest">
                            Contact Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Let's Build Your{" "}
                            <span className="text-gradient-primary">Climate Future Together</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                            Whether you are taking your first steps on the sustainability journey or accelerating an
                            established programme, our team is ready to help. Tell us about your goals and challenges
                            — and we'll connect you with the right expert within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {contactDetails.map((detail) => (
                                <div key={detail.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <detail.icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                                            {detail.label}
                                        </p>
                                        <p className="text-foreground">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        className="p-8 rounded-2xl bg-card border border-border/50"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Maya"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Patel"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="maya@yourcompany.com"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Organisation
                                </label>
                                <input
                                    type="text"
                                    name="organisation"
                                    value={formData.organisation}
                                    onChange={handleChange}
                                    placeholder="Your Company Ltd."
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                    How Can We Help?
                                </label>
                                <select
                                    name="helpWith"
                                    value={formData.helpWith}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                                >
                                    <option value="" disabled>
                                        Select a service area...
                                    </option>
                                    {helpOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your climate goals and challenges..."
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
