import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    resources: [
      { label: "Help Center", href: "#" },
      { label: "Courses", href: "#courses" },
      { label: "Partners", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-navy text-navy-foreground py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">EduPlatform</span>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              A leading educational platform that helps you develop your skills and achieve your professional goals.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/70 hover:text-navy-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/70 hover:text-navy-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/70 hover:text-navy-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-foreground/70 text-sm">
            © 2024 EduPlatform. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-navy-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
