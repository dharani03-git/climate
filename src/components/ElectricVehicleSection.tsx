import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ElectricVehicleSection = () => {
  const evBusinessModels = [
    {
      model: "Energy-as-a-Service (EaaS)",
      description: "Subscription-based energy services without equipment ownership",
      application: "Corporate charging, fleet depots, workplace charging",
    },
    {
      model: "Virtual Power Plants (VPP)",
      description: "Aggregated decentralized energy resources (EVs + storage)",
      application: "Grid balancing, demand response, revenue stacking",
    },
    {
      model: "Vehicle-to-Grid (V2G)",
      description: "Bidirectional energy flow from EVs to grid",
      application: "Fleet vehicles as mobile storage assets",
    },
    {
      model: "Battery-as-a-Service (BaaS)",
      description: "Separated battery ownership from vehicle purchase",
      application: "Swappable batteries, reduced upfront EV costs",
    },
    {
      model: "Charging-as-a-Service (CaaS)",
      description: "Third-party ownership and operation of charging infrastructure",
      application: "Retail locations, multi-family dwellings",
    },
    {
      model: "Green Certificates/RECs",
      description: "Tradable environmental attributes for carbon offsetting",
      application: "Corporate sustainability goals",
    },
    {
      model: "Microgrids + P2P Trading",
      description: "Localized energy generation and direct trading",
      application: "Campus settings, residential communities",
    },
    {
      model: "Corporate PPAs for EV Fleets",
      description: "Long-term renewable energy contracts for charging",
      application: "Large fleet operators, logistics companies",
    },
  ];

  const advisoryServices = [
    {
      category: "Strategic Advisory",
      details: "Market entry, M&A, partnership structuring, ecosystem development",
    },
    {
      category: "Technical Engineering",
      details: "Powertrain design, battery technology, charging systems, grid integration",
    },
    {
      category: "Financial & Economic Modeling",
      details: "TCO analysis, incentive optimization, investment cases, risk management",
    },
    {
      category: "Regulatory & Policy",
      details: "Compliance strategy, subsidy navigation, carbon credit optimization",
    },
    {
      category: "Supply Chain",
      details: "Localization strategy, supplier diversification, resilience planning",
    },
    {
      category: "Digital & Data",
      details: "Battery analytics, predictive maintenance, fleet management platforms, AI optimization",
    },
    {
      category: "Sustainability & ESG",
      details: "Circular economy design, carbon footprint reduction, ESG reporting",
    },
  ];

  const SectionTable = ({
    title,
    columns,
    rows,
    id,
  }: {
    title: string;
    columns: string[];
    rows: Record<string, string>[];
    id: string;
  }) => (
    <motion.div
      id={id}
      className="mb-16 scroll-mt-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-8 text-foreground">{title}</h3>
      <div className="overflow-x-auto rounded-xl bg-card border border-border/50">
        <table className="w-full">
          <thead>
            <tr className="bg-primary/10 border-b border-border/50">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-sm font-semibold text-primary text-gradient-primary"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-6 py-4 text-sm text-muted-foreground align-top"
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const technicalEngineeringData = [
    {
      "Capability Category": "Project Development Engineering",
      "Core Offerings": "Feasibility studies, site assessment, technical design",
      "Key Deliverables": "Technical reports, engineering plans, cost estimates",
    },
    {
      "Capability Category": "Design & Engineering Management",
      "Core Offerings": "Engineering oversight, design optimization, vendor management",
      "Key Deliverables": "Performance specifications, design documentation",
    },
    {
      "Capability Category": "Construction Advisory",
      "Core Offerings": "Construction planning, timeline optimization, cost control",
      "Key Deliverables": "Construction schedules, quality assurance plans",
    },
    {
      "Capability Category": "Grid Integration & Interconnection",
      "Core Offerings": "Grid impact studies, interconnection agreement support",
      "Key Deliverables": "Grid study reports, interconnection agreements",
    },
    {
      "Capability Category": "Environmental & Permitting",
      "Core Offerings": "Environmental impact assessment, permitting strategy",
      "Key Deliverables": "Environmental reports, permit applications",
    },
    {
      "Capability Category": "Operational Readiness",
      "Core Offerings": "Operations planning, staff training, maintenance protocols",
      "Key Deliverables": "O&M manuals, training programs, KPI frameworks",
    },
  ];

  const financialAdvisoryData = [
    {
      "Capability Category": "Financial Modeling & Analysis",
      "Core Offerings": "DCF analysis, sensitivity modeling, investment returns",
      "Key Deliverables": "Financial models, investment analyses",
    },
    {
      "Capability Category": "Capital Stack Structuring",
      "Core Offerings": "Debt and equity structuring, pricing optimization",
      "Key Deliverables": "Capital structure recommendations",
    },
    {
      "Capability Category": "Tax Optimization & Structuring",
      "Core Offerings": "Tax planning, incentive optimization, credit structuring",
      "Key Deliverables": "Tax optimization strategies",
    },
    {
      "Capability Category": "Project Finance Advisory",
      "Core Offerings": "Lender packaging, financial due diligence support",
      "Key Deliverables": "Project finance packages, term sheet negotiations",
    },
    {
      "Capability Category": "Risk Allocation & Mitigation",
      "Core Offerings": "Risk assessment, mitigation strategies, insurance planning",
      "Key Deliverables": "Risk registers, mitigation frameworks",
    },
    {
      "Capability Category": "Green Finance Instruments",
      "Core Offerings": "Green bonds, sustainability-linked loans, credit structuring",
      "Key Deliverables": "Green financing proposals, framework documentation",
    },
  ];

  const transactionCapitalData = [
    {
      "Capability Category": "M&A Advisory",
      "Core Offerings": "Buy-side/sell-side advice, valuation, deal structuring",
      "Key Deliverables": "Deal analyses, valuation reports, transaction documents",
    },
    {
      "Capability Category": "Capital Raising",
      "Core Offerings": "Investor sourcing, pitch development, fundraising strategy",
      "Key Deliverables": "Investment memorandums, pitch materials",
    },
    {
      "Capability Category": "Tax Equity Advisory",
      "Core Offerings": "Tax equity structuring, investor packaging",
      "Key Deliverables": "Tax equity structures, investor presentations",
    },
    {
      "Capability Category": "Secondary Market Transactions",
      "Core Offerings": "Portfolio sales, asset trading, exit strategies",
      "Key Deliverables": "Investment reports, transaction support",
    },
    {
      "Capability Category": "Development Capital",
      "Core Offerings": "Development financing, contingency funding structures",
      "Key Deliverables": "Development proposals, funding secured",
    },
  ];

  const commercialMarketData = [
    {
      "Capability Category": "Offtake Strategy",
      "Core Offerings": "PPA negotiation, offtake agreements, demand assessment",
      "Key Deliverables": "PPA drafts, market studies",
    },
    {
      "Capability Category": "Market Entry & Expansion",
      "Core Offerings": "Geographic expansion, market analysis, competitive positioning",
      "Key Deliverables": "Market entry plans, expansion strategies",
    },
    {
      "Capability Category": "Revenue Optimization",
      "Core Offerings": "Pricing strategy, revenue modeling, market optimization",
      "Key Deliverables": "Revenue models, pricing recommendations",
    },
    {
      "Capability Category": "Supply Chain & Procurement",
      "Core Offerings": "Vendor sourcing, contract negotiation, supply chain optimization",
      "Key Deliverables": "Procurement strategies, supplier agreements",
    },
    {
      "Capability Category": "Portfolio Management",
      "Core Offerings": "Portfolio optimization, asset allocation, performance tracking",
      "Key Deliverables": "Portfolio analyses, management dashboards",
    },
  ];

  const greenEnergyData = [
    {
      "Capability Category": "Renewable Energy Projects",
      "Core Offerings": "Solar, wind, biomass project development and advisory",
      "Key Deliverables": "Project development plans, feasibility studies",
    },
    {
      "Capability Category": "Energy Storage",
      "Core Offerings": "Battery storage, thermal storage, hydrogen storage advisory",
      "Key Deliverables": "Storage system designs, business case analyses",
    },
    {
      "Capability Category": "Green Hydrogen & e-Fuels",
      "Core Offerings": "Green hydrogen production, e-fuels development, scaling",
      "Key Deliverables": "Production plans, technical assessments",
    },
    {
      "Capability Category": "Electric Mobility & Charging",
      "Core Offerings": "EV charging infrastructure, fleet electrification, V2G systems",
      "Key Deliverables": "Charging network plans, EV fleet strategies",
    },
    {
      "Capability Category": "Grid Modernization",
      "Core Offerings": "Smart grid solutions, microgrid development, grid integration",
      "Key Deliverables": "Grid upgrade plans, microgrid designs",
    },
    {
      "Capability Category": "Circular Economy",
      "Core Offerings": "Lifecycle assessment, recycling programs, resource recovery",
      "Key Deliverables": "Circular strategies, LCA reports",
    },
  ];

  const regulatorySustainabilityData = [
    {
      "Capability Category": "Policy & Regulatory Advisory",
      "Core Offerings": "Compliance strategy, regulatory navigation, advocacy support",
      "Key Deliverables": "Compliance roadmaps, policy briefs",
    },
    {
      "Capability Category": "ESG Integration",
      "Core Offerings": "ESG strategy, governance setup, performance targets",
      "Key Deliverables": "ESG frameworks, governance documentation",
    },
    {
      "Capability Category": "Green Certification",
      "Core Offerings": "Certifications (B Corp, LEED, etc.), audit support",
      "Key Deliverables": "Certification applications, audit reports",
    },
    {
      "Capability Category": "Climate Risk & Resilience",
      "Core Offerings": "TCFD alignment, resilience planning, scenario analysis",
      "Key Deliverables": "Risk assessments, resilience plans",
    },
    {
      "Capability Category": "Sustainability-Linked Finance",
      "Core Offerings": "Sustainability-linked instruments, KPI framework, reporting",
      "Key Deliverables": "KPI frameworks, sustainability reports",
    },
  ];

  const projectLifecycleData = [
    {
      Phase: "Concept & Early Development",
      "Advisory Services": "Scoping, feasibility, preliminary design",
      "Key Activities": "Site identification, resource assessment, business case",
    },
    {
      Phase: "Pre-Construction Development",
      "Advisory Services": "Engineering, financing, permitting support",
      "Key Activities": "Detailed design, lender packaging, permit acquisition",
    },
    {
      Phase: "Construction & Commissioning",
      "Advisory Services": "Construction management, commissioning oversight",
      "Key Activities": "Quality assurance, testing, system validation",
    },
    {
      Phase: "Operations & Asset Management",
      "Advisory Services": "O&M optimization, performance monitoring, upgrades",
      "Key Activities": "Performance tracking, asset maintenance, yield optimization",
    },
    {
      Phase: "End-of-Life & Repowering",
      "Advisory Services": "Decommissioning, repowering strategies, asset recovery",
      "Key Activities": "Recycling planning, repowering assessment, value recovery",
    },
  ];

  const innovativeBusinessModelsData = [
    {
      "Model Category": "Energy-as-a-Service",
      Description: "Pay-per-use energy services with equipment ownership retained",
      "Advisory Focus": "Service design, customer acquisition, performance guarantees",
    },
    {
      "Model Category": "Infrastructure-as-a-Service",
      Description: "Cloud-based infrastructure for energy management and monitoring",
      "Advisory Focus": "Platform development, integration, user experience",
    },
    {
      "Model Category": "Corporate PPAs",
      Description: "Direct renewable energy procurement by corporates",
      "Advisory Focus": "PPA structuring, offtaker packaging, revenue optimization",
    },
    {
      "Model Category": "Virtual Power Plants",
      Description: "Aggregated distributed resources for grid services",
      "Advisory Focus": "Resource aggregation, grid services, demand response",
    },
    {
      "Model Category": "Vehicle-to-Grid",
      Description: "EVs as distributed energy assets for grid support",
      "Advisory Focus": "V2G technology, fleet integration, revenue models",
    },
    {
      "Model Category": "Peer-to-Peer Energy Trading",
      Description: "Direct energy trading between community participants",
      "Advisory Focus": "Platform design, regulatory compliance, market mechanisms",
    },
    {
      "Model Category": "Carbon-as-a-Service",
      Description: "Managed carbon credit aggregation and trading",
      "Advisory Focus": "Credit sourcing, verification, monetization strategies",
    },
  ];

  const crossCuttingData = [
    {
      Capability: "Digital & Data Analytics",
      Description: "Advanced analytics, AI/ML, real-time monitoring and optimization",
      Application: "Performance prediction, anomaly detection, system optimization",
    },
    {
      Capability: "Blockchain & Smart Contracts",
      Description: "Distributed ledger technology for transparent transactions",
      Application: "Energy trading, ownership verification, automated settlements",
    },
    {
      Capability: "Geospatial Analysis",
      Description: "Location-based data for site selection and impact modeling",
      Application: "Resource mapping, suitability analysis, environmental assessment",
    },
    {
      Capability: "Stakeholder Engagement",
      Description: "Community consultation, stakeholder management, communication",
      Application: "Community relations, public acceptance, regulatory approval",
    },
  ];

  return (
    <section id="electric-vehicle" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Electric Vehicle & Mobility Solutions — <span className="text-primary text-gradient-primary">Transform the Future of Transportation</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From EV charging infrastructure and battery solutions to innovative business models and grid integration,
            we provide end-to-end advisory across the entire electric mobility ecosystem.
            Our expertise spans technology, finance, regulatory strategy, and sustainable business model design.
          </motion.p>
        </div>

        {/* Part 1: EV Business Models */}
        <motion.div
          id="ev-business-models"
          className="mb-20 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground">EV Business Models</h3>
          <div className="overflow-x-auto rounded-xl bg-card border border-border/50">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10 border-b border-border/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary text-gradient-primary">
                    Business Model
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary text-gradient-primary">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary text-gradient-primary">
                    Application
                  </th>
                </tr>
              </thead>
              <tbody>
                {evBusinessModels.map((model, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {model.model}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{model.description}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{model.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Part 2: Key Advisory Service Categories */}
        <motion.div
          id="key-advisory-services"
          className="mb-20 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground">Key Advisory Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisoryServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.category}
                    </h4>
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group 1: Technical & Engineering Advisory */}
        <SectionTable
          id="technical-engineering"
          title="Technical & Engineering Advisory"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={technicalEngineeringData}
        />

        {/* Group 2: Financial Advisory & Structuring */}
        <SectionTable
          id="financial-advisory"
          title="Financial Advisory & Structuring"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={financialAdvisoryData}
        />

        {/* Group 3: Transaction & Capital Markets */}
        <SectionTable
          id="transaction-capital"
          title="Transaction & Capital Markets"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={transactionCapitalData}
        />

        {/* Group 4: Commercial & Market Strategy */}
        <SectionTable
          id="commercial-market"
          title="Commercial & Market Strategy"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={commercialMarketData}
        />

        {/* Group 5: Specialized Green Energy Advisory */}
        <SectionTable
          id="green-energy"
          title="Specialized Green Energy Advisory"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={greenEnergyData}
        />

        {/* Group 6: Regulatory, ESG & Sustainability */}
        <SectionTable
          id="regulatory-sustainability"
          title="Regulatory, ESG & Sustainability"
          columns={[
            "Capability Category",
            "Core Offerings",
            "Key Deliverables",
          ]}
          rows={regulatorySustainabilityData}
        />

        {/* Group 7: Project Lifecycle Support */}
        <SectionTable
          id="project-lifecycle"
          title="Project Lifecycle Support"
          columns={["Phase", "Advisory Services", "Key Activities"]}
          rows={projectLifecycleData}
        />

        {/* Group 8: Innovative Business Models */}
        <SectionTable
          id="innovative-business-models"
          title="Innovative Business Models"
          columns={[
            "Model Category",
            "Description",
            "Advisory Focus",
          ]}
          rows={innovativeBusinessModelsData}
        />

        {/* Cross-Cutting Capabilities */}
        <SectionTable
          id="cross-cutting-capabilities"
          title="Cross-Cutting Capabilities"
          columns={["Capability", "Description", "Application"]}
          rows={crossCuttingData}
        />
      </div>
    </section>
  );
};

export default ElectricVehicleSection;
