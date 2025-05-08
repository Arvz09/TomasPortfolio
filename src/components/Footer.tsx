
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:contact@example.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <a 
            href="#home" 
            className="font-bold text-xl md:text-2xl tracking-tight flex items-center gap-2 mb-6 md:mb-0"
          >
            <span className="text-primary">&lt;</span>
            <span>Arbie</span>
            <span className="text-primary">/&gt;</span>
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Arbie Tomas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
