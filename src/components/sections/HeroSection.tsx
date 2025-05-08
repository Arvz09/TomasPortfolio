
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item}>
            <p className="text-lg md:text-xl mb-4 text-primary font-medium">
              Hi, I'm
            </p>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Arbie Tomas
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            A fresh graduate with a Bachelor of Science in Information Technology.
            I build modern, responsive web applications with intermediate knowledge
            in full-stack development.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <Button asChild size="lg" className="gap-2 px-6">
              <a href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          
          <motion.div variants={item} className="mb-12">
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <a href="/resume.pdf" download className="flex items-center">
                <Download className="h-4 w-4 mr-2" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-2 border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-[10%] -right-[10%] w-[35%] aspect-square rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[40%] aspect-square rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
