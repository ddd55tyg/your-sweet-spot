import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { label: "من نحن", href: "#" },
      { label: "وظائف", href: "#" },
      { label: "المدونة", href: "#" },
    ],
    resources: [
      { label: "مركز المساعدة", href: "#" },
      { label: "الدورات", href: "#courses" },
      { label: "الشركاء", href: "#" },
    ],
    legal: [
      { label: "الخصوصية", href: "#" },
      { label: "الشروط", href: "#" },
      { label: "الأمان", href: "#" },
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
              <div className="w-10 h-10 bg-sky rounded-lg flex items-center justify-center">
                <span className="text-sky-foreground font-heading font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">EduPlatform</span>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              منصة تعليمية رائدة تساعدك على تطوير مهاراتك وتحقيق أهدافك المهنية.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">الشركة</h4>
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
            <h4 className="font-heading font-bold mb-4">الموارد</h4>
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
            <h4 className="font-heading font-bold mb-4">قانوني</h4>
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
            © 2024 EduPlatform. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-navy-foreground/10 rounded-full flex items-center justify-center hover:bg-sky transition-colors"
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
