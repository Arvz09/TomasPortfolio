import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Calendar, Mail, ExternalLink, ChevronRight, BadgeCheck, Users, Trophy, Award, Github, Linkedin, Send, Circle, Code2, Quote, ArrowUp, Layers, Coffee, FolderKanban, User } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Typing effect for role
  const roles = ["Junior Full Stack Developer", "React Enthusiast","Junior Full Stack Developer", "Problem Solver",  "Junior Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Experience data
  const experiences = [
    { title: "Junior Full-Stack Developer", company: "B1G Corporation", year: "2025", current: true },
    { title: "Web Development Intern", company: "B1G Corporation", year: "2025" },
    { title: "BS Information Technology", company: "De La Salles University - Dasmariñas", year: "2025" },
  ];

  // Tech stack data
  const techStack = {
    Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "REST API", "GraphQL", "JWT"],
    "DevOps & Cloud": ["Git", "Vercel", "Render", "GitHub Actions"],
  };

  // Projects data
  const projects = [
    {
      title: "Pet Crossing Clinic",
      description: "Appointment scheduling for veterinary clinic",
      link: "https://pet-crossing-clinic.vercel.app/",
      linkText: "pet-crossing-clinic.vercel.app",
    },
    {
      title: "B1G Corporation",
      description: "Official website for distribution company",
      link: "https://www.b1gcorporation.com/",
      linkText: "b1gcorporation.com",
    },
  ];

  // Certifications data (preview - first 4)
  const certifications = [
    { title: "To Follow", issuer: "To Follow" },
  ];

  // Simple, minimal animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  // Simple fade up for sections
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Unique: Subtle dot pattern background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--dot-color)_1px,_transparent_0)] [background-size:24px_24px] opacity-30 pointer-events-none" style={{ "--dot-color": "hsl(var(--muted-foreground) / 0.15)" } as React.CSSProperties} />

      <main className="flex-1 container-main py-8 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="mb-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Profile Photo with unique glow effect */}
            <motion.div variants={item} className="flex-shrink-0 relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-32 h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden ring-2 ring-border">
                <img
                  src="/Grad pic.jpg"
                  alt="Arbie Tomas"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              {/* Name row with theme toggle on right */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <motion.div variants={item} className="flex items-center gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold">Arbie Tomas</h1>
                  <BadgeCheck className="h-6 w-6 text-foreground fill-muted" />
                </motion.div>

                {/* Theme Toggle */}
                <motion.div variants={item}>
                  <ThemeToggle />
                </motion.div>
              </div>

              <motion.div variants={item} className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin className="h-4 w-4" />
                <span>Cavite, Philippines</span>
              </motion.div>

              {/* Unique: Typing effect for role */}
              <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Web Developer</span>
                  <span className="mx-2">\</span>
                  <span className="text-foreground/70">
                    {displayedRole}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
                
                
              </motion.div>

              <motion.div variants={item} className="flex flex-wrap items-center gap-3">
                <Button className="rounded-full gap-2" asChild>
                  <a href="#contact">
                    <Mail className="h-4 w-4" />
                    Send an Email
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button variant="outline" className="rounded-full gap-2" asChild>
                  <a href="https://www.linkedin.com/in/arbietomas/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    Connect
                  </a>
                </Button>

                <Button variant="outline" className="rounded-full gap-2" asChild>
                  <a href="https://github.com/Arvz09" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Unique: Personal Quote Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="relative p-6 rounded-2xl bg-secondary/50 border border-border">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-muted-foreground/20" />
            <p className="text-center text-lg md:text-xl font-medium italic text-muted-foreground pl-8">
              "Building the web, one line of code at a time."
            </p>
            <p className="text-center text-sm text-foreground/60 mt-2">
              — My Development Philosophy
            </p>
          </div>
        </motion.section>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left Column - 3/5 */}
          <div className="lg:col-span-3 space-y-4">
            {/* About Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="card-title">
                <Code2 className="h-4 w-4" /> About
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm a fresh graduate and full-stack developer specializing in building solutions with{" "}
                  <span className="text-foreground font-medium">JavaScript</span>, <span className="text-foreground font-medium">TypeScript</span>, and{" "}
                  <span className="text-foreground font-medium">React</span>. I work on projects including building modern web 
                  applications, responsive designs, and RESTful APIs.
                </p>
                <p>
                  I've helped startups and small businesses grow and streamline their processes through 
                  software solutions. I'm passionate about creating efficient, user-friendly applications.
                </p>
                <p>
                  Currently, I'm diving deeper into modern web technologies, focusing on integrating 
                  best practices and new techniques into my development workflow.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title mb-0">
                  <Layers className="h-4 w-4" /> Tech Stack
                </h2>
                <Link 
                  to="/tech-stack" 
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
                >
                  View All <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="space-y-4">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category}>
                    <p className="text-xs font-medium text-muted-foreground mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="tech-pill hover:border-foreground/30 hover:bg-secondary transition-colors cursor-default">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Projects Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title mb-0">
                  <FolderKanban className="h-4 w-4" /> Recent Projects
                </h2>
                <Link 
                  to="/projects" 
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
                >
                  View All <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/card block p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-secondary/50 transition-all"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm font-semibold group-hover/card:text-foreground transition-colors">
                        {project.title}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{project.description}</p>
                    <span className="text-xs text-muted-foreground group-hover/card:text-foreground transition-colors">{project.linkText}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 2/5 */}
          <div className="lg:col-span-2 space-y-4">
            {/* Unique: Achievement Banner */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative bg-foreground p-5 text-background overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-background/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <p className="text-xs font-medium opacity-90 relative z-10">🎓 FRESH GRADUATE</p>
                <p className="text-2xl font-bold relative z-10">CLASS OF 2025</p>
                <p className="text-xs opacity-80 relative z-10 mt-1">De La Salle University - Dasmariñas</p>
                <p className="text-xs opacity-60 relative z-10">BS Information Technology • Web Development</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h2 className="card-title">
                <Circle className="h-4 w-4 fill-foreground" /> Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3 group/exp">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-colors ${exp.current ? 'bg-foreground ring-4 ring-foreground/10' : 'bg-muted-foreground/30 group-hover/exp:bg-foreground/50'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-tight">{exp.title}</p>
                      <p className="text-xs text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{exp.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Certifications Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title mb-0">
                  <Award className="h-4 w-4" /> Certifications
                </h2>
                <Link 
                  to="/certifications" 
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
                >
                  View All <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="py-2 border-b border-border last:border-0">
                    <p className="text-sm font-medium">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Beyond Coding Card */}
            <motion.div
              className="card-section group hover:border-foreground/20"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h2 className="card-title">
                <Coffee className="h-4 w-4" /> Beyond Coding
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  When not writing code, I focus on learning about emerging technologies, 
                  exploring new frameworks, and staying updated with industry trends.
                </p>
                <p>
                  I share my knowledge through building projects and continuous self-improvement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mt-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="card-section hover:border-foreground/20 transition-colors">
            <h2 className="card-title">
              <Mail className="h-4 w-4" /> Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Socials */}
              <div>
                <p className="text-sm text-muted-foreground mb-6">
                  Available for collaborations, freelance projects, and full-time opportunities.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/arbietomas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-foreground/5 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Connect with me</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Arvz09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-foreground/5 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">Check out my code</p>
                    </div>
                  </a>
                  <a
                    href="mailto:arbietomas@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-foreground/5 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs text-muted-foreground">arbietomas@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div>
                <p className="text-sm font-medium mb-4">Send me a message</p>
                <form 
                  action="mailto:arbietomas@gmail.com" 
                  method="GET" 
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="text-xs text-muted-foreground mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-muted-foreground mb-1.5 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs text-muted-foreground mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="body"
                      rows={4}
                      placeholder="Hi Arbie, I'd like to discuss..."
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-lg gap-2">
                    <Send className="h-4 w-4" />
                    Send Email
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* Unique: Floating scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-foreground text-background shadow-lg z-50 hover:bg-foreground/90 transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
