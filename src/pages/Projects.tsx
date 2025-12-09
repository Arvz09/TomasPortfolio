import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

type Project = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Pet Crossing Clinic",
      description: "Developed a custom appointment scheduling system for Pet Crossing Animal Clinic to streamline client bookings and manage veterinary appointments efficiently. The system allows pet owners to select available dates and times, input pet details, and receive confirmation notifications.",
      link: "https://pet-crossing-clinic.vercel.app/",
      linkText: "pet-crossing-clinic.vercel.app",
      image: "Petcrossing.png",
    },
    {
      title: "B1G Corporation",
      description: "Developed the official website for B1G Corporation, a distribution company based in the Philippines. The site offers a streamlined user experience, featuring product showcases, company information, and partner opportunities.",
      link: "https://www.b1gcorporation.com/",
      linkText: "b1gcorporation.com",
      image: "B1gcorp.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-xl font-bold">All Projects</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group block p-5 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-all"
            >
              <div className="flex items-start gap-1.5 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {project.linkText}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

