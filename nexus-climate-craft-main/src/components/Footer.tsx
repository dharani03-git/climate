const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-display font-bold text-lg uppercase text-foreground tracking-tight mb-2">
              Nexus Climate <span className="text-primary">Craft</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Accelerating the transition to a net-zero economy — one organisation at a time.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { heading: "Services", links: ["Climate Strategy", "Carbon MRV", "ESG Advisory", "Green Finance"] },
              { heading: "Solutions", links: ["ClimateOS™", "Reporting Accelerator", "Supply Chain", "Green Finance Readiness"] },
              { heading: "Industries", links: ["Energy & Utilities", "Financial Services", "Manufacturing", "Technology"] },
              { heading: "Company", links: ["About Us", "Careers", "Partners", "Contact Us"] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Nexus Climate Craft Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            25 Green Lane, London EC2A 3AE · hello@nexusclimate.craft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
