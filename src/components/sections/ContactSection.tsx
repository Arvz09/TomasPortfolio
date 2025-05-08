import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arbietomas@gmail.com",
      href: "mailto:arbietomas@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0969 168 1586",
      href: "tel:+639691681586",
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      value: "Connect with me on LinkedIn",
      href: "https://www.linkedin.com/in/arbietomas/",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arbietomas/",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Arvz09",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/arbietomas",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Have a project in mind? Let's discuss how I can help you bring your
            ideas to life. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border space-y-8">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t">
                <Button size="lg" className="w-full" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-14 flex items-center justify-start gap-4 hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <item.icon className="h-5 w-5" />
                      <span className="text-base">{item.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
