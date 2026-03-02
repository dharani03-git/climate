import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const menuItems = [
    {
      title: "Offerings",
      items: [
        { title: "Climate Strategy & Net-Zero Roadmapping", href: "#offerings", description: "Design ambitious, science-aligned net-zero strategies." },
        { title: "Carbon Measurement, Reporting & Verification", href: "#offerings", description: "Establish rigorous Scope 1, 2, and 3 emissions inventories." },
        { title: "ESG Governance & Disclosure Advisory", href: "#offerings", description: "Embed ESG into governance and navigate disclosures." },
        { title: "Green Finance & Sustainable Investment", href: "#offerings", description: "Access sustainability-linked loans and climate funds." },
        { title: "Just Transition & Business Transformation", href: "#offerings", description: "Navigate the transition from high-carbon activities." },
        { title: "Physical & Transition Climate Risk", href: "#offerings", description: "Model physical hazards and assess transition risks." },
      ],
    },
    {
      title: "Capabilities",
      items: [
        { title: "Data & Analytics", href: "#capabilities", description: "Transform complex emissions data into actionable insight." },
        { title: "Science-Based Targets (SBTi)", href: "#capabilities", description: "Guide organizations through the SBTi target design." },
        { title: "Policy & Regulatory Navigation", href: "#capabilities", description: "Navigate CSRD, SEC rules, and EU taxonomy." },
        { title: "Life Cycle Assessment (LCA)", href: "#capabilities", description: "Quantify the full environmental impact of products." },
        { title: "Stakeholder Engagement", href: "#capabilities", description: "Deliver impactful ESG briefings and engagement programs." },
        { title: "Clean Technology & Innovation", href: "#capabilities", description: "Identify and deploy emerging clean technologies." },
      ],
    },
    {
      title: "Solutions",
      items: [
        { title: "ClimateOS™ Platform", href: "#solutions", description: "Integrated management for your entire climate program." },
        { title: "Carbon Intelligence Suite", href: "#solutions", description: "AI-powered analytics for strategic emissions insight." },
        { title: "Reporting Accelerator", href: "#solutions", description: "Streamline mandatory and voluntary sustainability reporting." },
        { title: "Supply Chain Decarbonisation", href: "#solutions", description: "Activate your supplier network on climate action." },
        { title: "Green Finance Readiness", href: "#solutions", description: "Unlock sustainability-linked finance opportunities." },
      ],
    },
    {
      title: "Industries",
      items: [
        { title: "Energy & Utilities", href: "#industries", description: "Accelerate the transition with portfolio decarbonisation." },
        { title: "Manufacturing", href: "#industries", description: "Tackle hard-to-abate industrial emissions." },
        { title: "Financial Services", href: "#industries", description: "Align lending and investment with Paris Agreement goals." },
        { title: "Real Estate & Construction", href: "#industries", description: "Drive net-zero buildings through whole-lifecycle carbon assessment." },
        { title: "Agriculture & Food Systems", href: "#industries", description: "Transform land use and build regenerative programs." },
        { title: "Technology", href: "#industries", description: "Achieve verified net-zero through credible scope-3 measurement." },
        { title: "Transport & Logistics", href: "#industries", description: "Decarbonise fleets and build resilient supply chains." },
        { title: "Healthcare", href: "#industries", description: "Reduce environmental footprint across procurement and operations." },
      ],
    },
    {
      title: "Partners",
      items: [
        { title: "Strategic Alliances", href: "#partners", description: "Global alliances for scale and specialist climate focus." },
        { title: "Technology Partners", href: "#partners", description: "Curated, interoperable technology stack for climate data." },
        { title: "Research & Academic Partners", href: "#partners", description: "Grounded in current science and cutting-edge research." },
        { title: "Become a Partner", href: "#partners", description: "Explore how we might create more impact together." },
      ],
    },
    {
      title: "About Us",
      items: [
        { title: "Our Story", href: "#about", description: "Bridging the gap between climate ambition and action." },
        { title: "Mission & Values", href: "#about", description: "Equipment for turning ambition into verified impact." },
        { title: "Our Team", href: "#about", description: "80+ specialists across science, finance, and engineering." },
        { title: "Careers", href: "#about", description: "Join us in accelerating the transition to net-zero." },
        { title: "News & Insights", href: "#about", description: "Expert perspectives on climate strategy and trends." },
      ],
    },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight shrink-0 uppercase">
        Nexus Climate <span className="text-primary">Craft</span>
      </a>

      <div className="hidden xl:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {menuItems.map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent text-muted-foreground hover:text-foreground transition-colors">
                  {menu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
                    {menu.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          className="text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-6 py-2.5 rounded-full inline-flex items-center gap-2"
        >
          Contact Us <span className="text-lg">→</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
